import { Text } from "@chakra-ui/react";

interface Props {
  description: string;
}

const TrimContent = ({ description }: Props) => {
  const arr = description.substring(0, 15);
  return <Text>{description.length >= 15 ? arr + "..." : description}</Text>;
};

export default TrimContent;
