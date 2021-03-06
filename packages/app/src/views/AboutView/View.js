import React from "react";
import { Text, Heading, Group, Icon } from "@offcourse/atoms";
import { IconGroup, Loading } from "@offcourse/molecules";
import PropTypes from "prop-types";
import { sizes } from "@offcourse/constants";

const { LARGE, EXTRA_LARGE } = sizes;

import Loadable from "react-loadable";

const Markdown = Loadable({
  loader: () => import("markdown-to-jsx"),
  loading: Loading
});

const AboutView = ({ about }) => {
  const { title, text, address } = about;
  return (
    <Group justifyContent="center" alignItems="center">
      <Group
        p={8}
        justifyContent="flex-start"
        overflow="hidden scroll"
        maxWidth="50rem"
      >
        <Heading mt={8} mb={6} size={LARGE}>
          {title}
        </Heading>
        <Markdown
          options={{
            overrides: {
              p: { component: Text, props: { size: LARGE, mb: 7 } },
              a: { component: "a", props: { style: { color: "black" } } }
            }
          }}
        >
          {text}
        </Markdown>
        <Group flex="none" mb={6}>
          <Text size={LARGE}>{address.name}</Text>
          <Text size={LARGE}>{`${address.street} ${address.houseNumber}`}</Text>
          <Text size={LARGE}>{`${address.zipCode} ${address.city}`}</Text>
        </Group>
        <Group flex="none">
          <IconGroup>
            <Icon size={EXTRA_LARGE} name="email" />
            <Icon size={EXTRA_LARGE} mx={4} name="twitter" />
            <Icon size={EXTRA_LARGE} name="medium" />
          </IconGroup>
        </Group>
      </Group>
    </Group>
  );
};

AboutView.propTypes = {
  about: PropTypes.object
};

export default AboutView;
