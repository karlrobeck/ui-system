import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { Theme } from "./types";

export function generateConfig(theme: Theme) {
  return plugin((c) => {
    c.addUtilities({
        '.primary': {
            color: theme.colors.light?.primary || '',
        },
    })
    return {
        handler:c,
        config:{
            theme:{
                extend:{
                    colors:{
                        primary: theme.colors.light?.primary || '',
                    }
                }
            }
        }
    }
});
}
