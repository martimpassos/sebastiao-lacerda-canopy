//const { createThumbnailHelper } = require("@iiif/vault-helpers");
const axios = require("axios");


const getService = async (service, preferredWidth = 1200) => {
  try {
    const response = await axios.get(`${service["id"]}/info.json`);
    const { width, height } = response.data.sizes.reduce((a, b) => {
      return Math.abs(b.width - preferredWidth) <
        Math.abs(a.width - preferredWidth)
        ? b
        : a;
    });
    console.log('Width, height:', width, height)
    return {
      id: `${service["id"]}/full/${width},${height}/0/default.jpg`,
      width: width,
      height: height,
    };
  } catch (err) {
    console.log(err.response.status);
    return {};
  }
};

exports.getRepresentativeImage = async (resource, preferredSize = 1200) => {
  const firstCanvas = resource.items[0].items[0].items[0];
  const firstCanvasService = await getService(
    firstCanvas.body.service[0],
    preferredSize
  );
  console.log('firstCanvasService:', firstCanvasService)
  if (firstCanvasService) {
    return {best:
      {
        id: firstCanvasService.id,
        type: "Image",
        format: "image/jpeg",
        width: firstCanvasService.width,
        height: firstCanvasService.height,
      },
    };
  } else {
    return resource.thumbnail ? resource.thumbnail : [];
  }
}

// exports.getRepresentativeImage = async (canvas, preferredSize = 1200) => {
//   const helper = createThumbnailHelper();
//   try {
//     return await helper.getBestThumbnailAtSize(canvas, {
//       width: preferredSize,
//       height: preferredSize,
//     });
//   } catch (error) {
//     console.log(error);
//     return {};
//   }
// };
