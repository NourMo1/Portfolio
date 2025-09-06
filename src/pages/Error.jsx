import { MoveRight } from "lucide-react";
import Button from "../components/Button";

const Error = () => {

  return (
    <section className="pt-20 grow bg-[#f5f5f5] dark:bg-zinc-900">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="py-20">
          <div className="felx flex-col justify-center items-center text-center">
            <h1 className="text-6xl font-medium text-zinc-900 dark:text-white mx-auto mb-10">
              You are lost...
            </h1>
            <Button
              content={"To Homepage"}
              type={"button"}
              icon={MoveRight}
              to={"/"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;