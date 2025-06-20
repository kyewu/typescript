export class Single {
  static singleInstance = new Single()
  private constructor() {}

  public getInstance() {
    return 'hhh'
  }
}

const sg1 = Single.singleInstance.getInstance()
const sg2 = Single.singleInstance.getInstance()

export class DateUtil {
  static dateUtil: DateUtil;

  static getInstance() {
    if (!this.dateUtil) {
      DateUtil.dateUtil = new DateUtil();
    }
    return this.dateUtil
  }
  constructor() {
   
  }
  public getDate() {
    return 'hhh';
  }

  getYear() {
    return 'year'
  } 
}

DateUtil.getInstance().getDate()
DateUtil.getInstance().getYear()