{ mkPnpmPackage }:

mkPnpmPackage {
  src = ./..;

  installInPlace = true;
}
