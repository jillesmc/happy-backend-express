import Image from '../models/Image';

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `${process.env.APP_BASE_URL}:${process.env.APP_PORT}/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
