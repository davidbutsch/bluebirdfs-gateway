process.title = "bluebirdfs-gateway";
Error.stackTraceLimit = process.env.NODE_ENV === "production" ? -1 : 10;

import { addAlias } from "module-alias";
addAlias("@", `${__dirname}/`);

import "reflect-metadata";
import "./handleExit";

import * as libs from "@/libs";

import { env } from "@/common";
import { initializeWorkers } from "@/queue";

libs.Logger.info(
  `bluebirdfs-gateway with process id of ${process.pid} starting in ${env.NODE_ENV} mode`
);

initializeWorkers();
