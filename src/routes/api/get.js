module.exports = (req, res) => {
  // Mock data for demonstration
  const fragments = [
    { id: '1', name: 'Fragment 1', type: 'text/plain' },
    { id: '2', name: 'Fragment 2', type: 'application/json' },
  ];

  res.status(200).json({
    status: 'ok',
    fragments,
  });
};
