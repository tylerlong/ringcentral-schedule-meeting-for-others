import RingCentral from '@rc-ex/core';
import Rest from '@rc-ex/core/lib/Rest';

const rc = new RingCentral({
  server: Rest.productionServer,
  token: {
    access_token: process.env.RINGCENTRAL_ACCESS_TOKEN,
  },
});

(async () => {
  const ext = await rc.restapi().account().extension().get();
  console.log(ext);
})();
