// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import cookieParser from 'cookie-parser'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import { dirname } from 'path'; //_splitter_
import * as url from 'url'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import * as sd_UblRuRbQoHTpcjbw from './idsutil'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class ids {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'ids';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new ids(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_ids_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids');
    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_1ulwu2Rpiyxq6cDu(bh, parentSpanInst);
          //appendnew_next_sd_iVwRxkf15RZkzPvM
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_iVwRxkf15RZkzPvM');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['hrefstart'] = mw_hrefstart;
    let mw_Authorize: Middleware = new Middleware(
      this.serviceName,
      'Authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_uy5TNwnVTWzejVaH(bh, parentSpanInst);
          //appendnew_next_sd_CpL4UYaIGa1XrhHN
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_CpL4UYaIGa1XrhHN');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Authorize'] = mw_Authorize;
    //appendnew_flow_ids_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids');

    this.app['get'](
      `${this.serviceBasePath}/login`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_D02yC1HI51EvJP6d(bh, parentSpanInst);
          //appendnew_next_sd_FlUkV7Fm77JArsYD
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_FlUkV7Fm77JArsYD');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/login/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_Y4eJbmDwVrHbAn8b(bh, parentSpanInst);
          //appendnew_next_sd_VXkpI4024slx8JGx
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_VXkpI4024slx8JGx');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/user/info`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_QDGFkgUh3uZvpmYC(bh, parentSpanInst);
          //appendnew_next_sd_A4tKkOWJ76SojzxO
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_A4tKkOWJ76SojzxO');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_lH8g7M6SZGvPSqOR(bh, parentSpanInst);
          //appendnew_next_sd_uNyV7dTykNPJvmdo
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_uNyV7dTykNPJvmdo');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_R0NyYNrGjxc5E13T(bh, parentSpanInst);
          //appendnew_next_sd_JvXBw7USzQFqdbP2
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_JvXBw7USzQFqdbP2');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_HttpIn
  }
  //   service flows_ids

  //appendnew_flow_ids_start

  async sd_D02yC1HI51EvJP6d(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_D02yC1HI51EvJP6d',
      parentSpanInst
    );
    try {
      bh.local.idsConfigured = false;
      if (
        settings.default.hasOwnProperty('ids') &&
        settings.default['ids'].hasOwnProperty('client_id') &&
        settings.default['ids'].hasOwnProperty('client_secret')
      ) {
        bh.local.idsConfigured = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_EqVuxEhf9VwwZOvI(bh, parentSpanInst);
      //appendnew_next_sd_D02yC1HI51EvJP6d
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_D02yC1HI51EvJP6d',
        spanInst,
        'sd_D02yC1HI51EvJP6d'
      );
    }
  }

  async sd_EqVuxEhf9VwwZOvI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EqVuxEhf9VwwZOvI',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.idsConfigured,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_8G4kLmT17FEAToP2(bh, parentSpanInst);
      } else {
        bh = await this.sd_LxPVVJmh6cceO0qh(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EqVuxEhf9VwwZOvI',
        spanInst,
        'sd_EqVuxEhf9VwwZOvI'
      );
    }
  }

  async sd_8G4kLmT17FEAToP2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8G4kLmT17FEAToP2',
      parentSpanInst
    );
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dsXqSLzwINiIINoX(bh, parentSpanInst);
      //appendnew_next_sd_8G4kLmT17FEAToP2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8G4kLmT17FEAToP2',
        spanInst,
        'sd_8G4kLmT17FEAToP2'
      );
    }
  }

  async sd_dsXqSLzwINiIINoX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dsXqSLzwINiIINoX',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0lIx4UH6UdCGi1zK(bh, parentSpanInst);
      //appendnew_next_sd_dsXqSLzwINiIINoX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dsXqSLzwINiIINoX',
        spanInst,
        'sd_dsXqSLzwINiIINoX'
      );
    }
  }

  async sd_0lIx4UH6UdCGi1zK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0lIx4UH6UdCGi1zK',
      parentSpanInst
    );
    try {
      const sd_UblRuRbQoHTpcjbwInstance: sd_UblRuRbQoHTpcjbw.idsutil =
        sd_UblRuRbQoHTpcjbw.idsutil.getInstance();
      let outputVariables =
        await sd_UblRuRbQoHTpcjbwInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_46Z6t9pMxqvuB2a9(bh, parentSpanInst);
      //appendnew_next_sd_0lIx4UH6UdCGi1zK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0lIx4UH6UdCGi1zK',
        spanInst,
        'sd_0lIx4UH6UdCGi1zK'
      );
    }
  }

  async sd_46Z6t9pMxqvuB2a9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_46Z6t9pMxqvuB2a9',
      parentSpanInst
    );
    try {
      const sd_UblRuRbQoHTpcjbwInstance: sd_UblRuRbQoHTpcjbw.idsutil =
        sd_UblRuRbQoHTpcjbw.idsutil.getInstance();
      let outputVariables =
        await sd_UblRuRbQoHTpcjbwInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BNFneZBU5SzG1HmP(bh, parentSpanInst);
      //appendnew_next_sd_46Z6t9pMxqvuB2a9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_46Z6t9pMxqvuB2a9',
        spanInst,
        'sd_46Z6t9pMxqvuB2a9'
      );
    }
  }

  async sd_BNFneZBU5SzG1HmP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BNFneZBU5SzG1HmP',
      parentSpanInst
    );
    try {
      const authorizationRequest = Object.assign(
        {
          redirect_uri: url.resolve(bh.web.req.href, '/api/login/cb'),
          scope: 'openid profile email address phone user',
          state: bh.local.reqParams.state,
          nonce: bh.local.reqParams.nonce,
          response_type: bh.input.client.response_types[0],
        },
        bh.input.authParams
      );

      bh.local.redirectHeaders = {
        location: bh.input.client.authorizationUrl(authorizationRequest),
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_OgOyledc3CPERbV1(bh, parentSpanInst);
      //appendnew_next_sd_BNFneZBU5SzG1HmP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BNFneZBU5SzG1HmP',
        spanInst,
        'sd_BNFneZBU5SzG1HmP'
      );
    }
  }

  async sd_OgOyledc3CPERbV1(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OgOyledc3CPERbV1');
    }
  }

  async sd_LxPVVJmh6cceO0qh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LxPVVJmh6cceO0qh',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_LVs6oq1NFVfGdKOl(bh, parentSpanInst);
      //appendnew_next_sd_LxPVVJmh6cceO0qh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LxPVVJmh6cceO0qh',
        spanInst,
        'sd_LxPVVJmh6cceO0qh'
      );
    }
  }

  async sd_LVs6oq1NFVfGdKOl(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LVs6oq1NFVfGdKOl');
    }
  }

  async sd_1ulwu2Rpiyxq6cDu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1ulwu2Rpiyxq6cDu',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_UoSlbOVeoZePyui4(bh, parentSpanInst);
      //appendnew_next_sd_1ulwu2Rpiyxq6cDu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1ulwu2Rpiyxq6cDu',
        spanInst,
        'sd_1ulwu2Rpiyxq6cDu'
      );
    }
  }

  async sd_UoSlbOVeoZePyui4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UoSlbOVeoZePyui4',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UoSlbOVeoZePyui4',
        spanInst,
        'sd_UoSlbOVeoZePyui4'
      );
    }
  }

  async sd_Y4eJbmDwVrHbAn8b(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Y4eJbmDwVrHbAn8b',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.input.sessionParams = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jjfbZS1EkFwl1NcX(bh, parentSpanInst);
      //appendnew_next_sd_Y4eJbmDwVrHbAn8b
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Y4eJbmDwVrHbAn8b',
        spanInst,
        'sd_Y4eJbmDwVrHbAn8b'
      );
    }
  }

  async sd_jjfbZS1EkFwl1NcX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jjfbZS1EkFwl1NcX',
      parentSpanInst
    );
    try {
      const sd_UblRuRbQoHTpcjbwInstance: sd_UblRuRbQoHTpcjbw.idsutil =
        sd_UblRuRbQoHTpcjbw.idsutil.getInstance();
      let outputVariables =
        await sd_UblRuRbQoHTpcjbwInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_H8boZivXcCaekQhZ(bh, parentSpanInst);
      //appendnew_next_sd_jjfbZS1EkFwl1NcX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jjfbZS1EkFwl1NcX',
        spanInst,
        'sd_jjfbZS1EkFwl1NcX'
      );
    }
  }

  async sd_H8boZivXcCaekQhZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_H8boZivXcCaekQhZ',
      parentSpanInst
    );
    try {
      const params = bh.input.client.callbackParams(bh.web.req);
      let tokenset = await bh.input.client.callback(
        url.resolve(bh.web.req.href, 'cb'),
        params,
        {
          nonce: bh.input.sessionParams.data.nonce,
          state: bh.input.sessionParams.data.state,
        }
      );

      bh.local.redirectTo = bh.input.sessionParams.data.redirectTo;

      bh.local.userDetails = {
        tokenset: Object.assign({}, tokenset),
        userInfo: await bh.input.client.userinfo(tokenset['access_token']),
      };
      bh.local.userDetails['tokenset']['claims'] = Object.assign(
        {},
        tokenset.claims()
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_wvSr4SyaxTHmiXmd(bh, parentSpanInst);
      //appendnew_next_sd_H8boZivXcCaekQhZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_H8boZivXcCaekQhZ',
        spanInst,
        'sd_H8boZivXcCaekQhZ'
      );
    }
  }

  async sd_wvSr4SyaxTHmiXmd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wvSr4SyaxTHmiXmd',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_XUzAHLCyoNU3NUVd(bh, parentSpanInst);
      //appendnew_next_sd_wvSr4SyaxTHmiXmd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wvSr4SyaxTHmiXmd',
        spanInst,
        'sd_wvSr4SyaxTHmiXmd'
      );
    }
  }

  async sd_XUzAHLCyoNU3NUVd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XUzAHLCyoNU3NUVd',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['se'](
          bh.input.sessionParams.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_1mSmgrlSETxo3mIx(bh, parentSpanInst);
      } else {
        bh = await this.sd_s2Fay9HjPnC6dSzS(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XUzAHLCyoNU3NUVd',
        spanInst,
        'sd_XUzAHLCyoNU3NUVd'
      );
    }
  }

  async sd_1mSmgrlSETxo3mIx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1mSmgrlSETxo3mIx',
      parentSpanInst
    );
    try {
      bh.local.htmlResponse = `
 <html>
   <script>
      let _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_O2L2R3pnPnV6TFzm(bh, parentSpanInst);
      //appendnew_next_sd_1mSmgrlSETxo3mIx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1mSmgrlSETxo3mIx',
        spanInst,
        'sd_1mSmgrlSETxo3mIx'
      );
    }
  }

  async sd_O2L2R3pnPnV6TFzm(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_O2L2R3pnPnV6TFzm');
    }
  }

  async sd_s2Fay9HjPnC6dSzS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_s2Fay9HjPnC6dSzS',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Kf1se4pXGWv731p4(bh, parentSpanInst);
      //appendnew_next_sd_s2Fay9HjPnC6dSzS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_s2Fay9HjPnC6dSzS',
        spanInst,
        'sd_s2Fay9HjPnC6dSzS'
      );
    }
  }

  async sd_Kf1se4pXGWv731p4(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Kf1se4pXGWv731p4');
    }
  }

  async sd_QDGFkgUh3uZvpmYC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QDGFkgUh3uZvpmYC',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_FJukVhzO7xYUa4GT(bh, parentSpanInst);
      //appendnew_next_sd_QDGFkgUh3uZvpmYC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QDGFkgUh3uZvpmYC',
        spanInst,
        'sd_QDGFkgUh3uZvpmYC'
      );
    }
  }

  async sd_FJukVhzO7xYUa4GT(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FJukVhzO7xYUa4GT');
    }
  }

  async sd_6LpgGMSQfLUZ5jvR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6LpgGMSQfLUZ5jvR',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_6LpgGMSQfLUZ5jvR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6LpgGMSQfLUZ5jvR',
        spanInst,
        'sd_6LpgGMSQfLUZ5jvR'
      );
    }
  }

  async sd_lH8g7M6SZGvPSqOR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lH8g7M6SZGvPSqOR',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Ke3TVaq0zRbimXHG(bh, parentSpanInst);
      //appendnew_next_sd_lH8g7M6SZGvPSqOR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lH8g7M6SZGvPSqOR',
        spanInst,
        'sd_lH8g7M6SZGvPSqOR'
      );
    }
  }

  async sd_Ke3TVaq0zRbimXHG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ke3TVaq0zRbimXHG',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;
      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset
      ) {
        bh.local.sessionData['data']['redirectTo'] =
          bh.input.query['redirectTo'];
        bh.local.sessionData['data']['isMobile'] = bh.input.query['isMobile'];
        bh.local.sessionExists = true;
      } else {
        delete bh.local.sessionData['redirectTo'];
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ZuhxOUU2ZUX1tv67(bh, parentSpanInst);
      //appendnew_next_sd_Ke3TVaq0zRbimXHG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ke3TVaq0zRbimXHG',
        spanInst,
        'sd_Ke3TVaq0zRbimXHG'
      );
    }
  }

  async sd_ZuhxOUU2ZUX1tv67(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZuhxOUU2ZUX1tv67',
      parentSpanInst
    );
    try {
      const sd_UblRuRbQoHTpcjbwInstance: sd_UblRuRbQoHTpcjbw.idsutil =
        sd_UblRuRbQoHTpcjbw.idsutil.getInstance();
      let outputVariables =
        await sd_UblRuRbQoHTpcjbwInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nBhRHx55ET2Vsx0r(bh, parentSpanInst);
      //appendnew_next_sd_ZuhxOUU2ZUX1tv67
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZuhxOUU2ZUX1tv67',
        spanInst,
        'sd_ZuhxOUU2ZUX1tv67'
      );
    }
  }

  async sd_nBhRHx55ET2Vsx0r(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nBhRHx55ET2Vsx0r',
      parentSpanInst
    );
    try {
      let unsatisfied = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_kTXraZ9IjAkpKWTb(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_3oe5JNbptEQqbzy2(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nBhRHx55ET2Vsx0r',
        spanInst,
        'sd_nBhRHx55ET2Vsx0r'
      );
    }
  }

  async sd_kTXraZ9IjAkpKWTb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kTXraZ9IjAkpKWTb',
      parentSpanInst
    );
    try {
      await Promise.all([
        bh.local.sessionData.data.tokenset.access_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.access_token,
              'access_token'
            )
          : undefined,
        bh.local.sessionData.data.tokenset.refresh_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.refresh_token,
              'refresh_token'
            )
          : undefined,
      ]);

      bh.local.res = {
        idsURL: url.format(
          Object.assign(
            url.parse(bh.input.client.issuer.end_session_endpoint),
            {
              search: null,
              query: {
                id_token_hint: bh.local.sessionData.data.tokenset.id_token,
                post_logout_redirect_uri: url.resolve(
                  bh.web.req.href,
                  '/api/logout/cb'
                ),
                client_id: settings.default['ids']['client_id'],
              },
            }
          )
        ),
        sessionExists: true,
      };

      // Remove user info and tokenset before login redirect
      bh.local.sessionData.data.tokenset = null;
      bh.local.sessionData.data.userInfo = null;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst);
      //appendnew_next_sd_kTXraZ9IjAkpKWTb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kTXraZ9IjAkpKWTb',
        spanInst,
        'sd_kTXraZ9IjAkpKWTb'
      );
    }
  }

  async sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dCWCI7Lqpk6tk1KJ',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.sessionData.data;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_uikdimf7ObtV1MJ4(bh, parentSpanInst);
      //appendnew_next_sd_dCWCI7Lqpk6tk1KJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dCWCI7Lqpk6tk1KJ',
        spanInst,
        'sd_dCWCI7Lqpk6tk1KJ'
      );
    }
  }

  async sd_uikdimf7ObtV1MJ4(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uikdimf7ObtV1MJ4');
    }
  }

  async sd_3oe5JNbptEQqbzy2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3oe5JNbptEQqbzy2',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_uikdimf7ObtV1MJ4(bh, parentSpanInst);
      //appendnew_next_sd_3oe5JNbptEQqbzy2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3oe5JNbptEQqbzy2',
        spanInst,
        'sd_3oe5JNbptEQqbzy2'
      );
    }
  }

  async sd_R0NyYNrGjxc5E13T(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_R0NyYNrGjxc5E13T',
      parentSpanInst
    );
    try {
      bh.local.isPasswordResetCallback =
        !!bh.input.query.password_reset_username;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_67EZFuW9NDeKQPiE(bh, parentSpanInst);
      //appendnew_next_sd_R0NyYNrGjxc5E13T
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_R0NyYNrGjxc5E13T',
        spanInst,
        'sd_R0NyYNrGjxc5E13T'
      );
    }
  }

  async sd_67EZFuW9NDeKQPiE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_67EZFuW9NDeKQPiE',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_JAo66eJVVHHZe9NU(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_DtlQhO3kInAuocvC(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_67EZFuW9NDeKQPiE',
        spanInst,
        'sd_67EZFuW9NDeKQPiE'
      );
    }
  }

  async sd_JAo66eJVVHHZe9NU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JAo66eJVVHHZe9NU',
      parentSpanInst
    );
    try {
      const sessionStore = bh.web.req.sessionStore;
      const res = new Promise((res, rej) => {
        sessionStore.all((err, sessions) => {
          const promises = Object.keys(sessions).map((sid) => {
            return new Promise((resolve, reject) => {
              sessionStore.get(sid, (err, session) => {
                if (
                  session?.data?.userInfo?.username ===
                  bh.input.query.password_reset_username
                ) {
                  log.debug(
                    `[LCB] username matched::${session.data.userInfo.username}`
                  );
                  sessionStore.destroy(sid, (err, d) => {
                    resolve(d);
                  });
                } else {
                  resolve(undefined);
                }
              });
            });
          });
          Promise.all(promises).then((d) => res(d));
        });
      });

      const rr = await res;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_hddZ9b4VgwGfGQc8(bh, parentSpanInst);
      //appendnew_next_sd_JAo66eJVVHHZe9NU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JAo66eJVVHHZe9NU',
        spanInst,
        'sd_JAo66eJVVHHZe9NU'
      );
    }
  }

  async sd_hddZ9b4VgwGfGQc8(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'destroyed' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hddZ9b4VgwGfGQc8');
    }
  }

  async sd_DtlQhO3kInAuocvC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DtlQhO3kInAuocvC',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_z9TXHiLVdkllUFL3(bh, parentSpanInst);
      //appendnew_next_sd_DtlQhO3kInAuocvC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DtlQhO3kInAuocvC',
        spanInst,
        'sd_DtlQhO3kInAuocvC'
      );
    }
  }

  async sd_z9TXHiLVdkllUFL3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_z9TXHiLVdkllUFL3',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_uWB7NZyGujgJMHKz(bh, parentSpanInst);
      //appendnew_next_sd_z9TXHiLVdkllUFL3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_z9TXHiLVdkllUFL3',
        spanInst,
        'sd_z9TXHiLVdkllUFL3'
      );
    }
  }

  async sd_uWB7NZyGujgJMHKz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uWB7NZyGujgJMHKz',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['se'](
          bh.local.sessionData.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Z4xiGPOlzu7kxmS9(bh, parentSpanInst);
      } else {
        bh = await this.sd_StgZBqnxJmSeqo53(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uWB7NZyGujgJMHKz',
        spanInst,
        'sd_uWB7NZyGujgJMHKz'
      );
    }
  }

  async sd_Z4xiGPOlzu7kxmS9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Z4xiGPOlzu7kxmS9',
      parentSpanInst
    );
    try {
      bh.local.res = `<html>
   <script>
      var _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_JyohrXnXZw62Atho(bh, parentSpanInst);
      //appendnew_next_sd_Z4xiGPOlzu7kxmS9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Z4xiGPOlzu7kxmS9',
        spanInst,
        'sd_Z4xiGPOlzu7kxmS9'
      );
    }
  }

  async sd_JyohrXnXZw62Atho(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JyohrXnXZw62Atho');
    }
  }

  async sd_StgZBqnxJmSeqo53(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_StgZBqnxJmSeqo53',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_2tbgrjWhBfNxxl30(bh, parentSpanInst);
      //appendnew_next_sd_StgZBqnxJmSeqo53
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_StgZBqnxJmSeqo53',
        spanInst,
        'sd_StgZBqnxJmSeqo53'
      );
    }
  }

  async sd_2tbgrjWhBfNxxl30(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2tbgrjWhBfNxxl30');
    }
  }

  async sd_uy5TNwnVTWzejVaH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uy5TNwnVTWzejVaH',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_gzdpmgZQ0J1k7ko6(bh, parentSpanInst);
      //appendnew_next_sd_uy5TNwnVTWzejVaH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uy5TNwnVTWzejVaH',
        spanInst,
        'sd_uy5TNwnVTWzejVaH'
      );
    }
  }

  async sd_gzdpmgZQ0J1k7ko6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gzdpmgZQ0J1k7ko6',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_cS9molJbtlSga0QU(bh, parentSpanInst);
      //appendnew_next_sd_gzdpmgZQ0J1k7ko6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gzdpmgZQ0J1k7ko6',
        spanInst,
        'sd_gzdpmgZQ0J1k7ko6'
      );
    }
  }

  async sd_cS9molJbtlSga0QU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cS9molJbtlSga0QU',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;

      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset &&
        bh.local.sessionData.data.tokenset.access_token &&
        bh.local.sessionData.data.tokenset.refresh_token
      ) {
        bh.local.sessionExists = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xYbejuXUGF24nLhu(bh, parentSpanInst);
      //appendnew_next_sd_cS9molJbtlSga0QU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cS9molJbtlSga0QU',
        spanInst,
        'sd_cS9molJbtlSga0QU'
      );
    }
  }

  async sd_xYbejuXUGF24nLhu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xYbejuXUGF24nLhu',
      parentSpanInst
    );
    try {
      let unsatisfied = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_dPu7MJPxqQeaxRDB(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_swU7KcxYaDmeUXXx(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xYbejuXUGF24nLhu',
        spanInst,
        'sd_xYbejuXUGF24nLhu'
      );
    }
  }

  async sd_dPu7MJPxqQeaxRDB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dPu7MJPxqQeaxRDB',
      parentSpanInst
    );
    try {
      const sd_UblRuRbQoHTpcjbwInstance: sd_UblRuRbQoHTpcjbw.idsutil =
        sd_UblRuRbQoHTpcjbw.idsutil.getInstance();
      let outputVariables = await sd_UblRuRbQoHTpcjbwInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_sqnJl8qpCMdInL7g(bh, parentSpanInst);
      //appendnew_next_sd_dPu7MJPxqQeaxRDB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dPu7MJPxqQeaxRDB',
        spanInst,
        'sd_dPu7MJPxqQeaxRDB'
      );
    }
  }

  async sd_sqnJl8qpCMdInL7g(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sqnJl8qpCMdInL7g',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.local.newSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_XOCmd5cmMNzOxcKZ(bh, parentSpanInst);
      } else {
        bh = await this.sd_zXbS3PTquy2P3a1o(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sqnJl8qpCMdInL7g',
        spanInst,
        'sd_sqnJl8qpCMdInL7g'
      );
    }
  }

  async sd_XOCmd5cmMNzOxcKZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XOCmd5cmMNzOxcKZ',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5kguot1UlzFo1Bo0(bh, parentSpanInst);
      //appendnew_next_sd_XOCmd5cmMNzOxcKZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XOCmd5cmMNzOxcKZ',
        spanInst,
        'sd_XOCmd5cmMNzOxcKZ'
      );
    }
  }

  async sd_5kguot1UlzFo1Bo0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5kguot1UlzFo1Bo0',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_HongNZtayv6ng0AY(bh, parentSpanInst);
      //appendnew_next_sd_5kguot1UlzFo1Bo0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5kguot1UlzFo1Bo0',
        spanInst,
        'sd_5kguot1UlzFo1Bo0'
      );
    }
  }

  async sd_HongNZtayv6ng0AY(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HongNZtayv6ng0AY');
    }
  }

  async sd_zXbS3PTquy2P3a1o(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zXbS3PTquy2P3a1o',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.newSession.rotated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_7XoN6xZOWHeQZZPu(bh, parentSpanInst);
      } else {
        bh = await this.sd_naLozfX9VP4bhSyW(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zXbS3PTquy2P3a1o',
        spanInst,
        'sd_zXbS3PTquy2P3a1o'
      );
    }
  }

  async sd_7XoN6xZOWHeQZZPu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7XoN6xZOWHeQZZPu',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_kJdGEYBISva4x4Vt(bh, parentSpanInst);
      //appendnew_next_sd_7XoN6xZOWHeQZZPu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7XoN6xZOWHeQZZPu',
        spanInst,
        'sd_7XoN6xZOWHeQZZPu'
      );
    }
  }

  async sd_kJdGEYBISva4x4Vt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kJdGEYBISva4x4Vt',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_naLozfX9VP4bhSyW(bh, parentSpanInst);
      //appendnew_next_sd_kJdGEYBISva4x4Vt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kJdGEYBISva4x4Vt',
        spanInst,
        'sd_kJdGEYBISva4x4Vt'
      );
    }
  }

  async sd_naLozfX9VP4bhSyW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_naLozfX9VP4bhSyW',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_naLozfX9VP4bhSyW',
        spanInst,
        'sd_naLozfX9VP4bhSyW'
      );
    }
  }

  async sd_swU7KcxYaDmeUXXx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_swU7KcxYaDmeUXXx',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['cont'](
          bh.input.path,
          '/user/info',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_okQrjtZmGw8SU89P(bh, parentSpanInst);
      } else {
        bh = await this.sd_c56nT5c1Hz3L4ByO(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_swU7KcxYaDmeUXXx',
        spanInst,
        'sd_swU7KcxYaDmeUXXx'
      );
    }
  }

  async sd_okQrjtZmGw8SU89P(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_okQrjtZmGw8SU89P',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_HongNZtayv6ng0AY(bh, parentSpanInst);
      //appendnew_next_sd_okQrjtZmGw8SU89P
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_okQrjtZmGw8SU89P',
        spanInst,
        'sd_okQrjtZmGw8SU89P'
      );
    }
  }

  async sd_c56nT5c1Hz3L4ByO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_c56nT5c1Hz3L4ByO',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_HongNZtayv6ng0AY(bh, parentSpanInst);
      //appendnew_next_sd_c56nT5c1Hz3L4ByO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_c56nT5c1Hz3L4ByO',
        spanInst,
        'sd_c56nT5c1Hz3L4ByO'
      );
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false ||
      (await this.sd_wO1ruFztap1u8R9i(bh, parentSpanInst)) ||
      (await this.sd_RkdpfQzAO5Et4Uw4(bh, parentSpanInst))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_wO1ruFztap1u8R9i(bh, parentSpanInst) {
    const nodes = [
      'sd_46Z6t9pMxqvuB2a9',
      'sd_VXkpI4024slx8JGx',
      'sd_jjfbZS1EkFwl1NcX',
      'sd_H8boZivXcCaekQhZ',
      'sd_Y4eJbmDwVrHbAn8b',
      'sd_XUzAHLCyoNU3NUVd',
      'sd_1mSmgrlSETxo3mIx',
      'sd_s2Fay9HjPnC6dSzS',
      'sd_O2L2R3pnPnV6TFzm',
      'sd_Kf1se4pXGWv731p4',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_6LpgGMSQfLUZ5jvR(bh, parentSpanInst);
      //appendnew_next_sd_wO1ruFztap1u8R9i
      return true;
    }
    return false;
  }
  async sd_RkdpfQzAO5Et4Uw4(bh, parentSpanInst) {
    const nodes = ['sd_dPu7MJPxqQeaxRDB'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_5kguot1UlzFo1Bo0(bh, parentSpanInst);
      //appendnew_next_sd_RkdpfQzAO5Et4Uw4
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
