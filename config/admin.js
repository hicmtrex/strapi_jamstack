module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '11dc64757bed2161f2c75c5bdb35706e'),
  },
});
