// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import cookieParser from 'cookie-parser'; //_splitter_
import { dirname } from 'path'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { DmUtils } from '../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class preauthservice {
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
    this.serviceName = 'preauthservice';
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
      instance = new preauthservice(
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
    //appendnew_flow_preauthservice_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: preauthservice');
    //appendnew_flow_preauthservice_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: preauthservice');

    this.app['post'](
      `${this.serviceBasePath}/procedureCatalog`,
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
          bh = await this.sd_VDX1YTZ6IrVXB8z9(bh, parentSpanInst);
          //appendnew_next_sd_JNBcVR3MqwDFZi15
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_JNBcVR3MqwDFZi15');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/roomcap`,
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
          bh = await this.sd_rynfhJd4OElBMgE8(bh, parentSpanInst);
          //appendnew_next_sd_wHOXiUGPiizrDEIz
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_wHOXiUGPiizrDEIz');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/preAuth/create`,
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
          bh = await this.sd_P4UWAqCyGEzYjcT4(bh, parentSpanInst);
          //appendnew_next_sd_p5Is0ST7crp7wSk4
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_p5Is0ST7crp7wSk4');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/preauth/mo-action`,
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
          bh = await this.sd_DhFqLeMASoCRiKXF(bh, parentSpanInst);
          //appendnew_next_sd_Hkkw8m4LuTIFR3tM
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Hkkw8m4LuTIFR3tM');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/preauth/authorizer-action`,
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
          bh = await this.sd_jNs49iM7nLgtzPLM(bh, parentSpanInst);
          //appendnew_next_sd_UwDd5vjqXPRFoCr2
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_UwDd5vjqXPRFoCr2');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/reviewDecision`,
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
          bh = await this.sd_yvwJPyHcIYhB33X8(bh, parentSpanInst);
          //appendnew_next_sd_O53N10mYmijIbEIJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_O53N10mYmijIbEIJ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/preAuth/create`,
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
          bh = await this.sd_RZRnDPeqTdBVRJeF(bh, parentSpanInst);
          //appendnew_next_sd_PHnfMqXQMsCc6vVB
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_PHnfMqXQMsCc6vVB');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/estimatedPayableWorkflow`,
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
          bh = await this.sd_QiakUixTiKg1F25o(bh, parentSpanInst);
          //appendnew_next_sd_L4lYLny3qAgBFZ94
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_L4lYLny3qAgBFZ94');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_preauthservice_HttpIn
  }
  //   service flows_preauthservice

  //appendnew_flow_preauthservice_start

  async sd_VDX1YTZ6IrVXB8z9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VDX1YTZ6IrVXB8z9',
      parentSpanInst
    );
    try {
      bh.local.payload = {
        pageNumber: 0,
        pageSize: 10,
        multiplicity: 'multiple',
        filter: {},
        select: [],
        distinct: [],
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_YuGNrcoyF8uQsvny(bh, parentSpanInst);
      //appendnew_next_sd_VDX1YTZ6IrVXB8z9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VDX1YTZ6IrVXB8z9',
        spanInst,
        'sd_VDX1YTZ6IrVXB8z9'
      );
    }
  }

  async sd_YuGNrcoyF8uQsvny(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://reels-pt.neutrinos-apps.com/integration/api/records/filter/72b58c39-817f-4204-95dc-4f5eec8fd929/b14567c9-fd08-4d5a-bdeb-b5eab60fc62e/d7bba799-1913-4eef-9696-4ec21a4daa8b',
        timeout: 30000,
        method: 'post',
        headers: {
          token:
            'dff7ae6b-69ac-4be8-995c-a816ff8e0f88.9b057d1b88739e2c0a5c015686fa6b15e800f7c48c79eab906487bfd960d9762',
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.payload,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.result = responseMsg;
      await this.sd_6fn5YN8bkpBPcfyC(bh, parentSpanInst);
      //appendnew_next_sd_YuGNrcoyF8uQsvny
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YuGNrcoyF8uQsvny');
    }
  }

  async sd_6fn5YN8bkpBPcfyC(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result.payload.records);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6fn5YN8bkpBPcfyC');
    }
  }

  async sd_rynfhJd4OElBMgE8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rynfhJd4OElBMgE8',
      parentSpanInst
    );
    try {
      bh.local.payload = {
        pageNumber: 0,
        pageSize: 10,
        multiplicity: 'multiple',
        filter: {},
        select: [],
        distinct: [],
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_EhXSJcka9rIUWnxt(bh, parentSpanInst);
      //appendnew_next_sd_rynfhJd4OElBMgE8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rynfhJd4OElBMgE8',
        spanInst,
        'sd_rynfhJd4OElBMgE8'
      );
    }
  }

  async sd_EhXSJcka9rIUWnxt(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://reels-pt.neutrinos-apps.com/integration/api/records/filter/72b58c39-817f-4204-95dc-4f5eec8fd929/5cbbfa77-6882-4944-940b-de87a8edd576/d9e21782-e593-4469-8da4-63e1ac0ffb5d',
        timeout: 30000,
        method: 'post',
        headers: {
          token:
            'dff7ae6b-69ac-4be8-995c-a816ff8e0f88.9b057d1b88739e2c0a5c015686fa6b15e800f7c48c79eab906487bfd960d9762',
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.local.payload,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.result = responseMsg;
      await this.sd_RWwkCRaFkbCJokvs(bh, parentSpanInst);
      //appendnew_next_sd_EhXSJcka9rIUWnxt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EhXSJcka9rIUWnxt');
    }
  }

  async sd_RWwkCRaFkbCJokvs(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result.payload.records);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RWwkCRaFkbCJokvs');
    }
  }

  async sd_P4UWAqCyGEzYjcT4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_P4UWAqCyGEzYjcT4',
      parentSpanInst
    );
    try {
      const body = bh.input.body || {};

      console.log('PreAuth Request Body:', body);

      // Generate PreAuth ID
      const today = new Date();

      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');

      const randomNo = Math.floor(10000 + Math.random() * 90000);

      const preauthId = `PA-${yyyy}${mm}${dd}-${randomNo}`;

      // Prepare DB payload
      bh.local.preauthData = {
        preauth_id: preauthId,

        policy_no: body.policyNumber || '',

        patient_name: body.patientName || '',

        patient_age: body.patientAge || 0,

        hospital_name: body.hospitalName || '',

        diagnosis: body.diagnosis || '',

        procedure_code: body.procedureCode || '',

        room_category: body.roomCategory || '',

        length_of_stay: body.lengthOfStay || 0,

        requested_amount: body.requestedAmount || 0,

        estimated_payable: null,

        final_payable: null,

        mo_remarks: null,

        authorizer_remarks: null,

        status: 'SUBMITTED',

        approval_number: null,
      };

      console.log('Prepared PreAuth Data:', bh.local.preauthData);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.insertData(bh, parentSpanInst);
      //appendnew_next_sd_P4UWAqCyGEzYjcT4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_P4UWAqCyGEzYjcT4',
        spanInst,
        'sd_P4UWAqCyGEzYjcT4'
      );
    }
  }

  async insertData(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'insertData',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_dm4nlxZgQKbuz5SV');
      bh.local.result = await dmUtilsInst.insert(
        '_EN_lfgkiu8oko',
        bh.local.preauthData
      );

      this.tracerService.sendData(spanInst, bh);
      await this.response(bh, parentSpanInst);
      //appendnew_next_insertData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6Fb6fuXjNbv0LqEW',
        spanInst,
        'insertData'
      );
    }
  }

  async response(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.preauthData);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VO0BuInnxhHr5QlC');
    }
  }

  async sd_DhFqLeMASoCRiKXF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DhFqLeMASoCRiKXF',
      parentSpanInst
    );
    try {
      const body = bh.input.body || {};

      const preauthId = body.id;

      console.log('MO Action Request:', body);

      console.log('PreAuth ID:', preauthId);

      // Validate action
      if (!body.action) {
        bh.local.response = {
          message: 'Action is required',
        };

        return;
      }

      // Validate remark
      if (!body.remark) {
        bh.local.response = {
          message: 'Remark is required',
        };

        return;
      }

      // Prepare update object
      bh.local.moActionData = {
        preauth_id: preauthId,

        mo_remarks: body.remark,
      };

      // APPROVE FLOW
      if (body.action === 'APPROVE') {
        bh.local.moActionData.status = 'AUTHORIZER';

        bh.local.response = {
          message: 'MO Approved Successfully',

          preauth_id: preauthId,

          status: 'AUTHORIZER',
        };
      }

      // REJECT FLOW
      if (body.action === 'REJECT') {
        bh.local.moActionData.status = 'REJECTED';

        bh.local.response = {
          message: 'MO Rejected PreAuth',

          preauth_id: preauthId,

          status: 'REJECTED',
        };
      }

      console.log('Prepared MO Action Data:', bh.local.moActionData);

      console.log('Updating PreAuth Request...');

      // Execute update query payload
      bh.local.updatePreAuthPayload = {
        preauth_id: bh.local.moActionData.preauth_id,

        mo_remarks: bh.local.moActionData.mo_remarks,

        status: bh.local.moActionData.status,
      };

      console.log('Update Payload:', bh.local.updatePreAuthPayload);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_m6RImHPV5PNzHM7Y(bh, parentSpanInst);
      //appendnew_next_sd_DhFqLeMASoCRiKXF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DhFqLeMASoCRiKXF',
        spanInst,
        'sd_DhFqLeMASoCRiKXF'
      );
    }
  }

  async sd_m6RImHPV5PNzHM7Y(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_m6RImHPV5PNzHM7Y',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_dm4nlxZgQKbuz5SV');
      bh.model.result = await dmUtilsInst.updateById(
        '_EN_lfgkiu8oko',
        bh.local.updatePreAuthPayload
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_UItP46zvZCrljVab(bh, parentSpanInst);
      //appendnew_next_sd_m6RImHPV5PNzHM7Y
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_m6RImHPV5PNzHM7Y',
        spanInst,
        'sd_m6RImHPV5PNzHM7Y'
      );
    }
  }

  async sd_UItP46zvZCrljVab(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.updatePreAuthPayload);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UItP46zvZCrljVab');
    }
  }

  async sd_jNs49iM7nLgtzPLM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jNs49iM7nLgtzPLM',
      parentSpanInst
    );
    try {
      const body = bh.input.body || {};

      const preauthId = body.id;

      // Validation
      if (!body.action) {
        bh.local.response = {
          message: 'Action is required',
        };

        return;
      }

      if (!body.remark) {
        bh.local.response = {
          message: 'Remark is required',
        };

        return;
      }

      // Generate Approval Number
      const today = new Date();

      const yyyy = today.getFullYear();

      const randomNo = Math.floor(10000 + Math.random() * 90000);

      const approvalNumber = `APR-${yyyy}-${randomNo}`;

      // Prepare Payload
      bh.local.updatePayload = {
        preauth_id: preauthId,

        final_payable: body.final_payable || 0,

        authorizer_remarks: body.remark,

        updated_at: new Date(),
      };

      // APPROVE FLOW
      if (body.action === 'APPROVE') {
        bh.local.updatePayload.status = 'APPROVED';

        bh.local.updatePayload.approval_number = approvalNumber;

        bh.local.response = {
          message: 'PreAuth Approved Successfully',

          preauth_id: preauthId,

          approval_number: approvalNumber,

          status: 'APPROVED',
        };
      }

      // REJECT FLOW
      if (body.action === 'REJECT') {
        bh.local.updatePayload.status = 'REJECTED';

        bh.local.updatePayload.approval_number = null;

        bh.local.response = {
          message: 'PreAuth Rejected',

          preauth_id: preauthId,

          status: 'REJECTED',
        };
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_vFCGD772TAuKoWWr(bh, parentSpanInst);
      //appendnew_next_sd_jNs49iM7nLgtzPLM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jNs49iM7nLgtzPLM',
        spanInst,
        'sd_jNs49iM7nLgtzPLM'
      );
    }
  }

  async sd_vFCGD772TAuKoWWr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vFCGD772TAuKoWWr',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_dm4nlxZgQKbuz5SV');
      bh.local.result = await dmUtilsInst.updateById(
        '_EN_lfgkiu8oko',
        bh.local.updatePayload
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_t2ahChuBqMNlDTWz(bh, parentSpanInst);
      //appendnew_next_sd_vFCGD772TAuKoWWr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vFCGD772TAuKoWWr',
        spanInst,
        'sd_vFCGD772TAuKoWWr'
      );
    }
  }

  async sd_t2ahChuBqMNlDTWz(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_t2ahChuBqMNlDTWz');
    }
  }

  async sd_yvwJPyHcIYhB33X8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yvwJPyHcIYhB33X8',
      parentSpanInst
    );
    try {
      const body = bh.input.body || {};

      console.log('Routing Request:', body);

      bh.local.payload = {
        ruleGroupId: 'a7a6deef-b744-406a-a5ec-2f0bfda3bff5',

        version: '1.0.0',

        inputObj: {
          PatientAge: body.PatientAge,

          RequestedAmount: body.RequestedAmount,
        },
      };

      console.log('Prepared Payload:', bh.local.payload);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pJTu1ONVAdvwB6V9(bh, parentSpanInst);
      //appendnew_next_sd_yvwJPyHcIYhB33X8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yvwJPyHcIYhB33X8',
        spanInst,
        'sd_yvwJPyHcIYhB33X8'
      );
    }
  }

  async sd_pJTu1ONVAdvwB6V9(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://reels-pt.neutrinos-apps.com/integration/api/runtime/sync',
        timeout: 30000,
        method: 'post',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.payload,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.route = responseMsg;
      await this.sd_8QiqDYIHnnbbQ6Px(bh, parentSpanInst);
      //appendnew_next_sd_pJTu1ONVAdvwB6V9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pJTu1ONVAdvwB6V9');
    }
  }

  async sd_8QiqDYIHnnbbQ6Px(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.route);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8QiqDYIHnnbbQ6Px');
    }
  }

  async sd_RZRnDPeqTdBVRJeF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RZRnDPeqTdBVRJeF',
      parentSpanInst
    );
    try {
      const body = bh.input.body || {};

      console.log('PreAuth Request Body:', body);

      // Generate PreAuth ID
      const today = new Date();

      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');

      const randomNo = Math.floor(10000 + Math.random() * 90000);

      const preauthId = `PA-${yyyy}${mm}${dd}-${randomNo}`;

      // Prepare DB payload
      bh.local.preauthData = {
        preauth_id: preauthId,

        policy_no: body.policyNumber || '',

        patient_name: body.patientName || '',

        patient_age: body.patientAge || 0,

        hospital_name: body.hospitalName || '',

        diagnosis: body.diagnosis || '',

        procedure_code: body.procedureCode || '',

        room_category: body.roomCategory || '',

        length_of_stay: body.lengthOfStay || 0,

        requested_amount: body.requestedAmount || 0,

        estimated_payable: null,

        final_payable: null,

        mo_remarks: null,

        authorizer_remarks: null,

        status: 'SUBMITTED',

        approval_number: null,
      };

      console.log('Prepared PreAuth Data:', bh.local.preauthData);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.insertData2(bh, parentSpanInst);
      //appendnew_next_sd_RZRnDPeqTdBVRJeF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RZRnDPeqTdBVRJeF',
        spanInst,
        'sd_RZRnDPeqTdBVRJeF'
      );
    }
  }

  async insertData2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'insertData2',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_dm4nlxZgQKbuz5SV');
      bh.local.result = await dmUtilsInst.insert(
        '_EN_lfgkiu8oko',
        bh.local.preauthData
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.alphaPayload(bh, parentSpanInst);
      //appendnew_next_insertData2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FTLixoUWf573pzpf',
        spanInst,
        'insertData2'
      );
    }
  }

  async alphaPayload(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'alphaPayload',
      parentSpanInst
    );
    try {
      bh.local.alphaPayload = {
        caseType: 'Health-PreAuth-POC-Nisha',
        caseData: {
          preauth_id: bh.local.preauthData.preauthId,
          policy_no: bh.local.preauthData.policyNumber,
          patient_name: bh.local.preauthData.patientName,
          patient_age: bh.local.preauthData.patientAge,
          hospital_name: bh.local.preauthData.hospitalName,
          diagnosis: bh.local.preauthData.diagnosis,
          procedure_code: bh.local.preauthData.procedureCode,
          room_category: bh.local.preauthData.roomCategory,
          length_of_stay: bh.local.preauthData.lengthOfStay,
          requested_amount: bh.local.preauthData.requestedAmount,
          estimated_payable: null,
          final_payable: null,
          mo_remarks: null,
          authorizer_remarks: null,
          status: 'SUBMITTED',
          approval_number: null,
        },
      };
      bh.local.tokenpayload = {
        client_secret:
          'e28WZR6ZKyrYILTSKKClFEwNlYoGR2cvISwFCoIXP4S7DJgsaqhHRSNqpoWgYbcx_DUlrSkoA1zS5uFOzP-J9C',
        client_id: '0ddh_euTKkSA682Yy5HuC',
        grant_type: 'client_credentials',
      };
      console.log('Alpha payload:', bh.local.alphaPayload);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.tokenApi(bh, parentSpanInst);
      //appendnew_next_alphaPayload
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WMAt3xXo0fdSo32o',
        spanInst,
        'alphaPayload'
      );
    }
  }

  async tokenApi(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://ids-ctr-pt.neutrinos-apps.com/token',
        timeout: 30000,
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.tokenpayload,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.token = responseMsg;
      bh = await this.token(bh, parentSpanInst);
      //appendnew_next_tokenApi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Y9ekGhx3YCFekhoo');
    }
  }

  async token(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('token', parentSpanInst);
    try {
      console.log(':::::::::token::::::::', bh.local.token);
      bh.local.authHeader = bh.local.token.payload.access_token;
      console.log(':::::::::token11::::::::', bh.local.authHeader);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.caseCreation(bh, parentSpanInst);
      //appendnew_next_token
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YF6s4D5SjNms6IaC',
        spanInst,
        'token'
      );
    }
  }

  async caseCreation(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://alpha-pt.neutrinos-apps.com/caseservice/case/instance/create',
        timeout: 30000,
        method: 'post',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.alphaPayload,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.alpharesponse = responseMsg;
      bh = await this.sd_IqCGG9VQ5T5lGrsS(bh, parentSpanInst);
      //appendnew_next_caseCreation
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_w3eVrVkkpXKt2w8t');
    }
  }

  async sd_IqCGG9VQ5T5lGrsS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IqCGG9VQ5T5lGrsS',
      parentSpanInst
    );
    try {
      bh.local.allresponse = {
        ticket: bh.local.response,
        'case-creation': bh.local.alpharesponse,
        //  "auto-assign":bh.local.result
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_48Qnc9trLiAKUUxc(bh, parentSpanInst);
      //appendnew_next_sd_IqCGG9VQ5T5lGrsS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IqCGG9VQ5T5lGrsS',
        spanInst,
        'sd_IqCGG9VQ5T5lGrsS'
      );
    }
  }

  async sd_48Qnc9trLiAKUUxc(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.allresponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_48Qnc9trLiAKUUxc');
    }
  }

  async sd_QiakUixTiKg1F25o(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QiakUixTiKg1F25o',
      parentSpanInst
    );
    try {
      const body = bh.input.body || {};

      console.log('Runtime Request:', body);

      // Validate input object
      if (!body.inputObj) {
        bh.local.response = {
          message: 'inputObj is required',
        };

        return;
      }

      // Hardcoded payload
      bh.local.payload = {
        workflowId: 'df8503db-4d70-4754-b645-49939fe38c00',

        version: '1.0.0',

        inputObj: {
          preauth_id: body.inputObj.preauth_id,

          sumInsured: body.inputObj.sumInsured,

          RoomCategory: body.inputObj.RoomCategory,

          ProcedureCode: body.inputObj.ProcedureCode,

          requestedAmount: body.inputObj.requestedAmount,

          lengthOfStayDays: body.inputObj.lengthOfStayDays,

          PatientAge: body.inputObj.PatientAge,
        },
      };

      console.log('Prepared Payload:', bh.local.payload);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_33o1v1r4aAbBT3EH(bh, parentSpanInst);
      //appendnew_next_sd_QiakUixTiKg1F25o
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QiakUixTiKg1F25o',
        spanInst,
        'sd_QiakUixTiKg1F25o'
      );
    }
  }

  async sd_33o1v1r4aAbBT3EH(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://reels-pt.neutrinos-apps.com/integration/api/runtime/sync',
        timeout: 30000,
        method: 'post',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          token:
            'dff7ae6b-69ac-4be8-995c-a816ff8e0f88.9b057d1b88739e2c0a5c015686fa6b15e800f7c48c79eab906487bfd960d9762',
        },
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.local.payload,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.result = responseMsg;
      bh = await this.sd_fghQIYyafpll1MfN(bh, parentSpanInst);
      //appendnew_next_sd_33o1v1r4aAbBT3EH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_33o1v1r4aAbBT3EH');
    }
  }

  async sd_fghQIYyafpll1MfN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fghQIYyafpll1MfN',
      parentSpanInst
    );
    try {
      console.log('Runtime API Response:', bh.local.result);

      // Extract preauth id
      const preauthId = bh.input.body.inputObj.preauth_id;

      // Extract estimated payable
      const estimatedPayable = bh.local.result.payload.result.estimatedPayable;

      // Map Route → Status
      const route = bh.local.result.payload.result.Route;
      let status = 'SUBMITTED';

      if (route === 'AUTO_APPROVE') {
        status = 'APPROVED';
      } else if (route === 'MO_REVIEW') {
        status = 'MO_REVIEW';
      } else if (route === 'MO_REVIEW+AUTHORIZER') {
        status = 'AUTHORIZER';
      }

      // Prepare UPDATE payload
      bh.local.updatePayload = {
        preauth_id: preauthId,

        estimated_payable: estimatedPayable,

        status: status,
      };

      console.log('Prepared Update Payload:', bh.local.updatePayload);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VIOAkkukG9mDLqTU(bh, parentSpanInst);
      //appendnew_next_sd_fghQIYyafpll1MfN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fghQIYyafpll1MfN',
        spanInst,
        'sd_fghQIYyafpll1MfN'
      );
    }
  }

  async sd_VIOAkkukG9mDLqTU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VIOAkkukG9mDLqTU',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_dm4nlxZgQKbuz5SV');
      bh.local.tableresult = await dmUtilsInst.updateById(
        '_EN_lfgkiu8oko',
        bh.local.updatePayload
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_wDUYBQz6u2X0ZkyC(bh, parentSpanInst);
      //appendnew_next_sd_VIOAkkukG9mDLqTU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VIOAkkukG9mDLqTU',
        spanInst,
        'sd_VIOAkkukG9mDLqTU'
      );
    }
  }

  async sd_wDUYBQz6u2X0ZkyC(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.tableresult);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wDUYBQz6u2X0ZkyC');
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
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_preauthservice_Catch
}
