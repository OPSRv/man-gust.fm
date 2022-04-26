import React from "react";

import { HashTagWrapper, ButtonHashTag } from "./_HashTagStyles";

const HashTag = ({ themeList, setTheme }) => {
  return (
    <>
      <HashTagWrapper>
        <ButtonHashTag onClick={() => setTheme("")}>#</ButtonHashTag>
        {themeList &&
          themeList
            .filter(
              (ele, index) =>
                index ===
                themeList.findIndex((elem) => elem.theme === ele.theme)
            )
            .map((filteredPodcast) => (
              <ButtonHashTag
                key={filteredPodcast.id}
                to={filteredPodcast.theme}
                onClick={() => setTheme(filteredPodcast.theme)}
              >
                #{filteredPodcast.theme}
              </ButtonHashTag>
            ))}
      </HashTagWrapper>
    </>
  );
};

export default HashTag;
