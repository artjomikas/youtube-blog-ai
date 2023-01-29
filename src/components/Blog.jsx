import { useParams } from "react-router-dom";
import { useContext } from "react";
import { BlogArticleContext } from "./../context/BlogArticleProvider";
import youtube from "../assets/icons/youtube.png";

const Blog = () => {
  const { blogText } = useContext(BlogArticleContext);

  const {
    title,
    videoLink,
    publishDate,
    readingTime,
    views,
    text,
    thumbnailImageUrl,
  } = {
    title: "Should you trust your first impression? - Peter Mende-Siedlecki",
    videoLink: "https://www.youtube.com/watch?v=0DOMlNJ9sOk",
    publishDate: "January 1, 2023",
    readingTime: 5,
    views: 10,
    thumbnailImageUrl:
      "https://www.leohuynh.dev/_next/image?url=%2Fstatic%2Fimages%2Fcommit.jpg&w=1920&q=75",
    text: [
      {
        header: "Initial Impression of Others",
        paragraph:
          "Research in social psychology suggests that we're quick to form lasting impressions of others based on their behaviors. We manage to do this with little effort, inferring stable character traits from a single behavior, like a harsh word or a clumsy step. Using our impressions as guides, we can accurately predict how people are going to behave in the future. ",
      },
      {
        header: "Updating Impressions",
        paragraph:
          "Behavioral researchers have identified consistent patterns that seem to guide this process of impression updating. On one hand, learning very negative, highly immoral information about someone typically has a stronger impact than learning very positive, highly moral information. So, unfortunately for our new friend from the football game, his bad behavior at the game might outweigh his good behavior at the park.",
      },
      {
        header: "Good is More Plentiful",
        paragraph:
          "That said, we can change our impressions in light of new information. Certain types of learning don't seem to lead to this sort of negativity bias. When learning about another person's abilities and competencies, for instance, this bias flips. It's actually the positive information that gets weighted more heavily. Let's go back to that football game. If a player scores a goal, it ultimately has a stronger impact on your impression of their skills than if they miss the net. The two sides of the updating story are ultimately quite consistent. Overall, behaviors that are perceived as being less frequent are also the ones that people tend to weigh more heavily when forming and updating impressions, highly immoral actions and highly competent actions. ",
      },
      {
        header: "The Brain and Impression Updating",
        paragraph:
          "So, what's happening at the level of the brain when we're updating our impressions? Using fMRI, or functional Magnetic Resonance Imaging, researchers have identified an extended network of brain regions that respond to new information that's inconsistent with initial impressions. These include areas typically associated with social cognition, attention, and cognitive control. Moreover, when updating impressions based on people's behaviors, activity in the ventrolateral prefrontal cortex and the superior temporal sulcus correlates with perceptions of how frequently those behaviors occur in daily life. ",
      },
      {
        header: "Conclusion",
        paragraph:
          "In other words, the brain seems to be tracking low-level, statistical properties of behavior in order to make complex decisions regarding other people's character. There's a good moral in this data: your brain, and by extension you, might care more about the very negative, immoral things another person has done compared to the very positive, moral things, but it's a direct result of the comparative rarity of those bad behaviors. We're more used to people being basically good, like taking time to help a stranger in need. In this context, bad might be stronger than good, but only because good is more plentiful.",
      },
    ],
  };
  const { id } = useParams();

  return (
    <div className="container md:max-w-screen-lg mx-auto px-4 items-center pt-16 pb-28 font-outfit">
      <h1 className="text-[34px] font-bold leading-10 tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl md:leading-14 lg:text-[54px] lg:leading-[64px] px-10">
        {title}
      </h1>

      <div className="flex text-gray-500 font-medium gap-2 pt-4 text-md px-10">
        <a href={videoLink} className="">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={youtube} alt="YouTube icon" />
            <p className="underline decoration-2 decoration-red-500">
              link
            </p>
          </div>
        </a>

        <span> • </span>

        <div className="flex items-center gap-2">
          <span role="img" aria-label="calendar">
            📅
          </span>
          {publishDate}
        </div>

        <span> • </span>

        <div className="flex items-center gap-2">
          <span role="img" aria-label="hourglass icon">
            ⏳
          </span>
          {readingTime} mins read
        </div>

        <span> • </span>

        <div className="flex items-center gap-2">
          <span role="img" aria-label="eye icon">
            👁️
          </span>
          {views} views
        </div>
      </div>

      <div className="flex pt-10">
        <img src={thumbnailImageUrl} alt="" className="rounded-md" />
      </div>

      <div className="py-8">
        {text.map((paragraph) => (
          <div className="px-4">
            <h2 className="text-[#111827] text-[50px] pt-16 pb-6 font-bold">
              {paragraph.header}
            </h2>
            <p className="text-[#374151] text-[20px] leading-8">
              {paragraph.paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blog;
