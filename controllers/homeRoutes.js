const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const posts = postData.map((p) => p.get({ plain: true }));

    res.json(posts);
    // res.render("homepage", {
    //   posts,
    //   logged_in: req.session.logged_in,
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const post = postData.get({ plain: true });
    res.json(post);

    //   res.render('post', {
    //     ...project,
    //     logged_in: req.session.logged_in
    //   });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
