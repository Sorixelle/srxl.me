{
  description = "Source code for my homepage at https://srxl.me/";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";

    pnpm2nix = {
      url = "github:wrvsrx/pnpm2nix-nzbr/adapt-to-v9";
      inputs = {
        nixpkgs.follows = "nixpkgs";
        flake-utils.follows = "flake-utils";
      };
    };
  };

  outputs =
    {
      self,
      flake-utils,
      nixpkgs,
      pnpm2nix,
    }@inputs:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs {
          inherit system;
          overlays = [ pnpm2nix.overlays.default ];
        };
      in
      {
        packages = {
          site = pkgs.callPackage ./nix/site.nix { };
        };

        devShell = pkgs.mkShell {
          name = "srxl.me-devshell";

          nativeBuildInputs =
            let
              nodePackages = with pkgs.nodePackages; [
                pkgs.nodePackages."@astrojs/language-server"
                pnpm
                typescript-language-server
                vscode-langservers-extracted
              ];
            in
            with pkgs;
            [
              git
              nil
              nixfmt-rfc-style
              nodejs
            ]
            ++ nodePackages;
        };
      }
    )
    // {
      nixosModules.default = import ./nix/module.nix inputs;
    };
}
