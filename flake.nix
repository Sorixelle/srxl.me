{
  description = "Source code for my homepage at https://srxl.me/";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, flake-utils, nixpkgs }:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = import nixpkgs { inherit system; };
      in {
        devShell = pkgs.mkShell {
          name = "srxl.me-devshell";

          nativeBuildInputs = let
            nodePackages = with pkgs.nodePackages; [
              pkgs.nodePackages."@astrojs/language-server"
              pnpm
              typescript-language-server
              vscode-css-languageserver-bin
              vscode-html-languageserver-bin
            ];
          in with pkgs; [ git nil nixfmt nodejs ] ++ nodePackages;
        };
      });
}
