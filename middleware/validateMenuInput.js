module.exports = (req, res, next) => {
    const { name, desc, price } = req.body;
    const missingFields = [];
  
    if (!name) missingFields.push('name');
    if (!desc) missingFields.push('desc');
    if (price === undefined) missingFields.push('price'); 
  
    if (missingFields.length > 0) {
      return res.status(400).json({
        error: `Följande fält saknas: ${missingFields.join(', ')}`
      });
    }
  
    if (typeof name !== 'string' || typeof desc !== 'string' || typeof price !== 'number') {
      return res.status(400).json({
        error: 'Fel datatyper: name och desc ska vara text, price ska vara ett nummer'
      });
    }
  
    next();
  };