var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var AutoIncrement = require('mongoose-sequence')(mongoose);

var itemSchema = new Schema(
  {
    model: {
      type: mongoose.Schema.Types.Mixed,
    },
    part_number: {
      type: mongoose.Schema.Types.Mixed,
    },
    project_type: {
      type: mongoose.Schema.Types.Mixed,
    },
    quantity: {
      type: mongoose.Schema.Types.Mixed,
      default: 1,
    },
    priority: {
      type: mongoose.Schema.Types.Mixed,
      default: 1,
    },
    status_p: {
      type: mongoose.Schema.Types.Mixed,
      default: 1,
    },
    start_p: {
      type: mongoose.Schema.Types.Mixed,
      default: 1,
    },
    end_p: {
      type: mongoose.Schema.Types.Mixed,
      default: 1,
    },
    days: {
      type: mongoose.Schema.Types.Mixed,
      default: 1,
    },
    completed: {
      type: mongoose.Schema.Types.Mixed,
      default: 1,
    },
    kicks: {
      type: mongoose.Schema.Types.Mixed,
      default: 1,
    },
    drawing: {
      type: mongoose.Schema.Types.Mixed,
      default: 1,
    },
    steel: {
      type: mongoose.Schema.Types.Mixed,
      default: 1,
    },
    die: {
      type: mongoose.Schema.Types.Mixed,
      default: 1,
    },
    jigs: {
      type: mongoose.Schema.Types.Mixed,
      default: 1,
    },
    broach: {
      type: mongoose.Schema.Types.Mixed,
      default: 1,
    },
    gauges: {
      type: mongoose.Schema.Types.Mixed,
      default: 1,
    },
    forging: {
      type: mongoose.Schema.Types.Mixed,
      default: 1,
    },
    soft: {
      type: mongoose.Schema.Types.Mixed,
      default: 1,
    },
    heat: {
      type: mongoose.Schema.Types.Mixed,
      default: 1,
    },
    qg: {
      type: mongoose.Schema.Types.Mixed,
      default: 1,
    },
    id: { type: Number},
  },
  { collection: "dataItems" }
);
itemSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: 'id'});

module.exports = mongoose.model("Item", itemSchema);

