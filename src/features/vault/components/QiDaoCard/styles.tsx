export const styles = theme => ({
  header: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    borderRadius: '12px 12px 0 0',
    padding: '24px',
    display: 'flex',
    '& img': {
      marginRight: theme.spacing(2),
    },
  },
  title: {
    ...theme.typography['h2'],
    color: theme.palette.text.primary,
  },
  content: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(3),
  },
  btn: {
    color: theme.palette.text.primary,
    padding: '12px 24px',
    borderRadius: '8px',
    backgroundColor: theme.palette.background.default,
    width: '100%',
  },
  link: {
    textDecoration: 'none',
    width: '100%',
  },
});
