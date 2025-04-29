type PropsType = {
  title?: string;
  description?: string;
  icon?: string;
};

import defaultFavicon from "@/assets/img/icon/ca-fav-3.svg";

const PageMeta = ({ title, description, icon }: PropsType) => {
  return (
    <>
      <title>{title ?? "Cargon-01"}</title>
      {description && <meta property="og:description" content={description} />}
      <link rel="icon" href={icon ?? defaultFavicon} type="image/png" />
    </>
  );
};

export default PageMeta;
