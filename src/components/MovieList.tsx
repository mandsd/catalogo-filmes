import React, { useState } from 'react';
import { useMovies } from '../contexts/MoviesContext';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Grid,
  TextField,
  MenuItem,
  IconButton,
  Chip,
  Rating,
  Paper,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MovieIcon from '@mui/icons-material/Movie';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

const genres = [
  'Todos',
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

const MovieList: React.FC = () => {
  const { movies, deleteMovie, filterByGenre } = useMovies();
  const [selectedGenre, setSelectedGenre] = useState('Todos');

  const filteredMovies = selectedGenre === 'Todos'
    ? movies
    : filterByGenre(selectedGenre);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={0} sx={{ p: 3, mb: 4, backgroundColor: 'primary.main', color: 'white' }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <MovieIcon fontSize="large" />
            Catálogo de Filmes
          </Typography>
          <Typography variant="subtitle1">
            {filteredMovies.length} {filteredMovies.length === 1 ? 'filme encontrado' : 'filmes encontrados'}
          </Typography>
        </Paper>
        
        <TextField
          select
          label="Filtrar por Gênero"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          fullWidth
          margin="normal"
          sx={{ mb: 4 }}
        >
          {genres.map((genre) => (
            <MenuItem key={genre} value={genre}>
              {genre}
            </MenuItem>
          ))}
        </TextField>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 3 }}>
          {filteredMovies.map((movie) => (
            <Card key={movie.id} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocalMoviesIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h6" component="h2" noWrap>
                    {movie.name}
                  </Typography>
                </Box>
                
                <Chip
                  label={movie.genre}
                  color="primary"
                  size="small"
                  sx={{ mb: 2 }}
                />
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Rating
                    value={movie.rating / 2}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    ({movie.rating}/10)
                  </Typography>
                </Box>
                
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {movie.comment}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
                <IconButton
                  onClick={() => deleteMovie(movie.id)}
                  color="error"
                  aria-label="delete"
                  size="small"
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default MovieList; 