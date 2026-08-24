import { MoveRight } from "lucide-react";
import Button from "../components/Button";

const Error = () => {

  return (
    <section className="pt-20 grow bg-transparent">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="py-20">
          <div className="felx flex-col justify-center items-center text-center">
            <h1 className="text-6xl font-medium text-text-primary mx-auto mb-10">
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