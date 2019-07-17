# beerjs.github.io

This webpage is currently using the unpublished version of RavenDesk, as such setting up the development enviroment is a bit cumbersome.
A release of RavenDesk is planned for August 2019, at which point I'll switch over to that version.
You can follow the setup process under to get started

## Development setup

You'll need Node.js and Yarn for development.

```
git clone -branch dev git@github.com:TheKnarf/theknarf.github.io.git
cd theknarf.github.io
git submodule update --init --recursive
yarn install
cd packages/beerjs
yarn run dev # or yarn build
```

At this point you should see the following in the terminal (followed with some webpack build output):

```
Ravendesk dev server
Server on http://localhost:3000/
```

Once we're updated to an officially released RavenDesk edition that'll simplify the development process a bit.
The weirdest part currently is that we'll have to checkout a whole other git repo where the unreleased version of RavenDesk lives,
and then use submodules to work on the BeerJS repo.
This inconvinience is just temporary.
