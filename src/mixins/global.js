import { mapActions } from "vuex";

const modal = {
  ...mapActions("modal", ["__openModal", "$_closeModal"]),
  $_openModal(name, data = {}) {
    this.__openModal({ ...data, ...{ name } });
  },
};

const methods = {
  $_staticPath(path) {
    return "https://cdn.lilianamodels.com/liliana/static-files/" + path;
  },
};

const globalMixin = { methods: { ...modal, ...methods } };
export default globalMixin;
