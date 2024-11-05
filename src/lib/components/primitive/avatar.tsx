import { Component, createEffect, createSignal, JSX } from "solid-js";
import { getTheme } from "../../theme/provider.tsx";
import { cn } from "../../utils.ts";

const Avatar: Component<
  { fallback?: JSX.Element } & JSX.ImgHTMLAttributes<HTMLImageElement>
> = (props) => {
  const { components } = getTheme();
  const [imageRef, setImageRef] = createSignal<HTMLImageElement>();
  const [isLoaded, setIsLoaded] = createSignal(true);

  const { ...rest } = props;

  createEffect(() => {
    if (
      imageRef() !== undefined &&
      imageRef()?.complete &&
      imageRef()?.naturalWidth !== 0
    ) {
      setIsLoaded(true);
      console.log("imageRef", imageRef());
    } else {
      setIsLoaded(false);
    }
  });

  return (
    <div>
      {isLoaded() ? (
        <img
          {...rest}
          ref={(el) => setImageRef(el)}
          class={cn(components.avatar.self, rest.class)}
        />
      ) : (
        props.fallback
      )}
    </div>
  );
};

export default Avatar;
