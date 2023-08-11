inputs:
{ config, lib, pkgs, ... }:

let conf = config.services.srxl-me;
in {
  options = {
    services.srxl-me = {
      enable = lib.mkEnableOption "the webserver for the srxl.me site.";

      package = lib.mkOption {
        type = lib.types.package;
        default = inputs.self.packages.${pkgs.stdenv.hostPlatform.system}.site;
        description = "The package providing the webserver.";
      };

      port = lib.mkOption {
        type = lib.types.port;
        default = 3000;
        description = "The port to run the webserver on.";
      };

      listenAddress = lib.mkOption {
        type = lib.types.str;
        default = "127.0.0.1";
        description = "The address the webserver should listen on.";
      };
    };
  };

  config = lib.mkIf conf.enable {
    systemd.services.srxl-me = {
      description = "srxl.me webserver";
      wantedBy = [ "multi-user.target" ];

      serviceConfig = {
        ExecStart = "${pkgs.nodejs}/bin/node ${conf.package}/server/entry.mjs";
        Environment = "PORT=${toString conf.port} HOST=${conf.listenAddress}";
      };
    };
  };
}
