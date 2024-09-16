{ mkPnpmPackage }:

(mkPnpmPackage {
  src = ./..;

  installInPlace = true;
}).overrideAttrs
  (old: {
    postInstall = ''
      ln -s ${old.passthru.nodeModules}/node_modules $out/node_modules
    '';
  })
