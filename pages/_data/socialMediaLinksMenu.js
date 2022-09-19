const fs = require("fs");
const config = require("../../config");
const data = require("../_content/menu/socialMediaLinksMenu.json");

/**
 * Read menu object and build dataset for header menu component.
 *
 * @param {*} url
 * @param {*} title
 * @returns
 */
module.exports = () => {
  return data.items.map((item) => {
    return {
      title: item.title,
      url: item.url.replace(config.build.editor_url, ""),
      post_name: item.post_name,
      // child_items: item.child_items.map((childItem) => {
      //     return {
      //         title: childItem.title,
      //         url: childItem.url.replace(config.build.editor_url, "")
      //     };
      // })
    };
  });
};
