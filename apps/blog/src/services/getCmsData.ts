export const getCmsData = async (route: string, preview?: boolean) => {
  try {
    let url = `${process.env.CMS_BASE_URL}/api/${route}`;
    if (preview) {
      url += "?publicationState=preview";
    }
    const posts = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.CMS_TOKEN}`,
      },
    });
    const { data } = await posts.json();

    return data;
  } catch (e) {
    console.error(e);
  }
};
