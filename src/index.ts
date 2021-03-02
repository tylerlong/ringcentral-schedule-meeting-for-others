import RingCentral from '@rc-ex/core';
import Rest from '@rc-ex/core/lib/Rest';

const rc = new RingCentral({
  server: Rest.productionServer,
  token: {
    access_token: process.env.RINGCENTRAL_ACCESS_TOKEN,
  },
});

(async () => {
  const response = await rc
    .restapi()
    .account()
    .extension()
    .meeting()
    .post({
      topic: 'test meeting, please ignore',
      meetingType: 'Scheduled',
      schedule: {
        startTime: '2030-05-01T00:01:49Z',
        durationInMinutes: 30,
        timeZone: {
          id: '58',
        },
      },
      host: {
        id: process.env.MEETING_HOST_EXT_ID,
      },
    });
  console.log(response);
  await rc.restapi().account().extension().meeting(response.id).delete();
})();
