#!/usr/bin/env node

export default (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
