export function notFound(req, res) {
  res.status(404).json({ message: 'Route introuvable' })
}

export function errorHandler(error, req, res, _next) {
  const status = error.status || 500
  console.error(error)
  res.status(status).json({
    message: status === 500 ? 'Erreur serveur' : error.message
  })
}
