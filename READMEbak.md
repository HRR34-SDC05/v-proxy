# Trailblazers Monorepo

This is a monorepo for the various components in the Trailblazers app: it contains the submodules with the actual functionality.  The main purpose of this repo is to consolidate the code into a central location so that webpack can split the code into separate bundles that do not contain any duplicate modules.

# Usage

Follow the steps below to use this module to generate updated JavaScript bundles:

### First time

* clone the repo using the command `git clone --recurse-submodules git@github.com:FrontEndCapstone/TrailblazersMonorepo.git`
  - Note the `--recursive-submodules` flag; if you leave this off, the submodules will not download correctly.
* Change to the TrailblazersMonorepo directory
* run `npm install`
* run `npm run build`
* locate the appropriate JavaScript bundle in `./bundles` and copy it to your master branch/deploy it in the normal way


### Subsequent times

* run `npm run update-all`
* run `npm run build`
* locate the appropriate JavaScript bundle in `./bundles` and copy it to your master branch/deploy it in the normal way
