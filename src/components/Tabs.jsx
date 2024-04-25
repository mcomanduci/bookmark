import { useState } from "react";
import TabItems from "./TabsItems";
import TabsPanels from "./TabsPanels";
import tab1Features from "/images/illustration-features-tab-1.svg";
import tab2Features from "/images/illustration-features-tab-2.svg";
import tab3Features from "/images/illustration-features-tab-3.svg";

function Tabs() {
  const [selected, setSelected] = useState("1");

  function handleClick(e) {
    setSelected(e.target.getAttribute("target"));
  }

  return (
    <section id="tab">
      <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
        <div className="bg-tabs"></div>
        <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
          <TabItems
            click={handleClick}
            title="Simple Bookmarking"
            target="1"
            id="1"
            active={selected}
          />
          <TabItems
            click={handleClick}
            title="Speedy Searching"
            target="2"
            id="2"
            active={selected}
          />
          <TabItems
            click={handleClick}
            title="Easy Sharing"
            target="3"
            id="3"
            active={selected}
          />
        </div>

        <div className="container mx-auto">
          <TabsPanels
            img={tab1Features}
            title="Bookmark in one click"
            content="Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites."
            id="1"
            active={selected}
          />
          <TabsPanels
            img={tab2Features}
            title="Intelligent search"
            content="Our powerful search feature will help you find saved sites in no
            time at all. No need to trawl through all of your bookmarks."
            id="2"
            active={selected}
          />
          <TabsPanels
            img={tab3Features}
            title="Share your bookmarks"
            content="Easily share your bookmarks and collections with others. Create
            a shareable a link that you can send at the click of a button."
            id="3"
            active={selected}
          />
        </div>
      </div>
    </section>
  );
}

export default Tabs;
