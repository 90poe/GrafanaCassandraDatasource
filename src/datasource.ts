// import _ from "lodash";

export class CassandraDatasource {

  type: string;
  url: string;
  name: string;
  q: string;
  backendSrv: string;
  templateSrv: string;
  withCredentials: string;

  constructor(instanceSettings, $q, backendSrv, templateSrv) {
    this.type = instanceSettings.type;
    this.url = instanceSettings.url;
    this.name = instanceSettings.name;
    this.q = $q;
    this.backendSrv = backendSrv;
    this.templateSrv = templateSrv;
    this.withCredentials = instanceSettings.withCredentials;
  }
  
  // Json version

  testDatasource() {
    console.log(this.backendSrv);
    // return this.doRequest({
    //   url: this.url + '/',
    //   method: 'GET',
    // }).then(response => {
    //   if (response.status === 200) {        
    //     return { status: "success", message: "Data source is working", title: "Success" };        
    //   }
    // });
    return true;
  }

  // console.log ('Status: %, message: %s, title: %s', status, message, title);
  
  // MySQL version
  /*
  testDatasource() {
    return this.backendSrv
      .datasourceRequest({
        url: '/api/tsdb/query',
        method: 'POST',
        data: {
          from: '5m',
          to: 'now',
          queries: [
            {
              refId: 'A',
              intervalMs: 1,
              maxDataPoints: 1,
              datasourceId: this.id,
              rawSql: 'SELECT 1',
              format: 'table',
            },
          ],
        },
      })
      .then((res: any) => {
        return { status: 'success', message: 'Database Connection OK' };
      })
      .catch((err: any) => {
        console.log(err);
        if (err.data && err.data.message) {
          return { status: 'error', message: err.data.message };
        } else {
          return { status: 'error', message: err.status };
        }
      });
  }
  */

}