class Controller {
  namespace = null;

  response(content) {
    return this.sendResponse(this.namespace, content);
  }

  error(error) {
    return this.sendResponse("error", { message: error.message });
  }

  sendResponse(namespace, content) {
    return {
      data: {
        [namespace]: content,
      },
    };
  }
}

module.exports = { Controller };
