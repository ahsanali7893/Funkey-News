import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Avatar,
  createStyles,
  rem,
} from '@mantine/core';
import { useState, useEffect } from 'react';
import axios from 'axios';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  rating: {
    position: 'absolute',
    top: theme.spacing.xs,
    right: rem(12),
    pointerEvents: 'none',
  },

  title: {
    display: 'block',
    marginTop: theme.spacing.md,
    marginBottom: rem(5),
  },

  action: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    }),
  },

  footer: {
    marginTop: theme.spacing.md,
  },
}));

interface ArticleCardProps {
  image: string;
  link: string;
  title: string;
  description: string;
  rating: string;
  author: {
    name: string;
    image: string;
  };
}

export function Hero({
  className,
  image,
  link,
  title,
  description,
  author,
  rating,
  ...others
}:any& ArticleCardProps & Omit<React.ComponentPropsWithoutRef<'div'>, keyof ArticleCardProps>) {
  const { classes, cx, theme } = useStyles();
  const linkProps = { href: link, target: '_blank', rel: 'noopener noreferrer' };


  const fetchArticleAPI = process.env.REACT_APP_API_Article;

  const fetchRecord = async () => {
    try {
      const response = await axios.get(`${fetchArticleAPI}?page=${page}`);
      setRecord(response?.data);
      console.log(response, response);
    } catch (error) {
      console.log(error);
    }
  };

  const [record, setRecord] = useState<any>([]);
  const [page, setPage] = useState<any>(1);

  useEffect(() => {
    fetchRecord();
  }, [page]);

  return (
    <>
   {record.map((article:any) => (
        <div key={article.id} className='max-w-6xl mx-auto'>
          <div className='py-44 w-64'>
            <Card withBorder radius='sm' className={cx(classes.card, className)} {...others}>
              <Card.Section>
                <a {...linkProps}>
                  <Image src={article.image} height={180} />
                </a>
              </Card.Section>

              <Badge
                className={classes.rating}
                variant='gradient'
                gradient={{ from: 'yellow', to: 'red' }}
              >
                {article.rating}
              </Badge>

              <Text className={classes.title} fw={500} component='a' {...linkProps}>
                {article.title}
              </Text>

              <Text fz='sm' color='dimmed' lineClamp={4}>
                {article.description}
              </Text>

              <Group position='apart' className={classes.footer}>
                <Center>
                  <Avatar src={article.author.image} size={24} radius='xl' mr='xs' />
                  <Text fz='sm' inline>
                    {article.author.name}
                  </Text>
                </Center>

                <Group spacing={8} mr={0}>
                  <ActionIcon className={classes.action}>
                    <IconHeart size='1rem' color={theme.colors.red[6]} />
                  </ActionIcon>
                  <ActionIcon className={classes.action}>
                    <IconBookmark size='1rem' color={theme.colors.yellow[7]} />
                  </ActionIcon>
                  <ActionIcon className={classes.action}>
                    <IconShare size='1rem' />
                  </ActionIcon>
                </Group>
              </Group>
            </Card>
          </div>
        </div>
      ))}
    </>
  );
}
