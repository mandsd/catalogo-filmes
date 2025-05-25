import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMovies } from '../contexts/MoviesContext';
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  MenuItem,
  Rating,
  Stack,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MovieIcon from '@mui/icons-material/Movie';

const genres = [
  'Ação',
  'Aventura',
  'Comédia',
  'Drama',
  'Ficção Científica',
  'Romance',
  'Terror',
  'Documentário',
  'Animação',
];

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Nome do filme é obrigatório'),
  genre: Yup.string()
    .required('Gênero é obrigatório'),
  rating: Yup.number()
    .min(0, 'A nota deve ser entre 0 e 10')
    .max(10, 'A nota deve ser entre 0 e 10')
    .required('Nota é obrigatória'),
  comment: Yup.string()
    .required('Comentário é obrigatório'),
});

const MovieForm: React.FC = () => {
  const { addMovie } = useMovies();

  const formik = useFormik({
    initialValues: {
      name: '',
      genre: '',
      rating: '',
      comment: '',
    },
    validationSchema,
    onSubmit: (values) => {
      addMovie({
        name: values.name,
        genre: values.genre,
        rating: Number(values.rating),
        comment: values.comment,
      });
      formik.resetForm();
    },
  });

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 4,
          marginBottom: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            width: '100%',
            borderRadius: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <MovieIcon color="primary" sx={{ fontSize: 32, mr: 1 }} />
            <Typography component="h1" variant="h5" align="center">
              Cadastrar Filme
            </Typography>
          </Box>

          <Box component="form" onSubmit={formik.handleSubmit}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Nome do Filme"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />

              <TextField
                fullWidth
                select
                id="genre"
                name="genre"
                label="Gênero"
                value={formik.values.genre}
                onChange={formik.handleChange}
                error={formik.touched.genre && Boolean(formik.errors.genre)}
                helperText={formik.touched.genre && formik.errors.genre}
              >
                {genres.map((genre) => (
                  <MenuItem key={genre} value={genre}>
                    {genre}
                  </MenuItem>
                ))}
              </TextField>

              <Box>
                <Typography component="legend" gutterBottom>
                  Nota
                </Typography>
                <Rating
                  name="rating"
                  value={Number(formik.values.rating) / 2}
                  precision={0.5}
                  onChange={(_, value) => {
                    formik.setFieldValue('rating', value ? value * 2 : '');
                  }}
                  size="large"
                />
                {formik.touched.rating && formik.errors.rating && (
                  <Typography color="error" variant="caption">
                    {formik.errors.rating}
                  </Typography>
                )}
              </Box>

              <TextField
                fullWidth
                id="comment"
                name="comment"
                label="Comentário"
                multiline
                rows={4}
                value={formik.values.comment}
                onChange={formik.handleChange}
                error={formik.touched.comment && Boolean(formik.errors.comment)}
                helperText={formik.touched.comment && formik.errors.comment}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                startIcon={<AddIcon />}
                sx={{ mt: 2 }}
              >
                Cadastrar Filme
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default MovieForm; 