//import { DeployButton } from "@/components/deploy";
import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";
import { Work } from "@/components/work";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl">Hi, I'm Tami👋🏽</h1>
            {/* <h2>Product Engineer based in the UK</h2> */}
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <p> 
        I'm a product engineer building and managing next-generation products.
        </p>
        <p>
        I love exploring new products, writing about unconventional ways to build ideas and I'm a huge lover of cartoons.
        </p>
      </FadeIn.Item>
      <FadeIn.Item>
        <Work category="projects" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="blog" />
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
    </FadeIn.Container>
  );
}
