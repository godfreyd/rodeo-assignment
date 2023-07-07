import { css, Global } from '@emotion/react';
import Theme from '../src/ui/Theme';

export const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [(Story) => {
  return (
    <Theme>
      <>
        <Global
          styles={css`
            html {
              background: #FFF;
            }
          `}
        />
        <Story />
      </>
    </Theme>
  );
}];
