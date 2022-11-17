const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");

const router = express.Router();

router.get("/", (req, res) => {
  const filterMessages = req.query.user || null;
  console.log(filterMessages);
  controller
    .getMessage(filterMessages)
    .then((messageList) => {
      response.success(req, res, messageList);
    })
    .catch((error) => {
      response.error(req, res);
    });
});
router.post("/", (req, res) => {
  controller
    .addMessage(req.body.user, req.body.message)

    .then((fullMessage) => {
      response.success(req, res, fullMessage);
    })
    .catch((err) => {
      response.error(req, res, err);
    });
});
router.patch("/:id", (req, res) => {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data);
    })
    .catch((err) => {
      response.error(req, res);
    });
});
router.delete("/:id", (req, res) => {
  controller
    .deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, "ya se borro");
    })
    .catch(() => {
      response.error(req, res);
    });
});
module.exports = router;
