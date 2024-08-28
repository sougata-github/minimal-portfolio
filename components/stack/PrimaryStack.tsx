import { primaryStackData } from "@/lib/data";
import { Separator } from "../ui/separator";

const PrimaryStack = () => {
  return (
    <section className="flex flex-col" id="primary-stack">
      <div className="flex flex-col">
        <h1 className="heading-text">Primary Stack</h1>
        <p className="secondary-text max-w-[520px]">
          As a frontend developer, I mostly work with JavaScript related
          frameworks.
        </p>
      </div>

      <Separator className="h-[0.2px] mt-5 bg-background/10 w-full" />

      <div className="pt-6 flex flex-col gap-6">
        {primaryStackData.map((item) => (
          <p className="secondary-text" key={item.title}>
            <a href={item.href} target="_blank" className="text-light">
              {item.title}
            </a>{" "}
            - {item.content}
          </p>
        ))}

        <p className="secondary-text">
          <span className="text-light">Backend</span> - For database management,
          I use either{" "}
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            className="text-light"
          >
            MongoDB
          </a>{" "}
          with{" "}
          <a
            href="https://mongoosejs.com/docs/"
            target="_blank"
            className="text-light"
          >
            Mongoose
          </a>{" "}
          or{" "}
          <a href="https://neon.tech/" target="_blank" className="text-light">
            NeonDB
          </a>{" "}
          with{" "}
          <a
            href="https://www.prisma.io/"
            target="_blank"
            className="text-light"
          >
            Prisma
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default PrimaryStack;
