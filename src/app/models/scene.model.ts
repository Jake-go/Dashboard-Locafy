export class Scene {
    id: number;
    inOrOut: string;
    location: string;
    timeOfDay: string;
    sceneNumbers: string;
    streetNum: string;
    streetName: string;
    postalCode: string;
    city: string;
    province: string;
    country: string;
  
    constructor(
      id?: number,
      inOrOut?: string,
      location?: string,
      timeOfDay?: string,
      sceneNumbers?: string,
      streetNum?: string,
      streetName?: string,
      postalCode?: string,
      city?: string,
      province?: string,
      country?: string
    ) {
      this.id = id || 0;
      this.inOrOut = inOrOut || '';
      this.location = location || '';
      this.timeOfDay = timeOfDay || '';
      this.sceneNumbers = sceneNumbers || '';
      this.streetNum = streetNum || '';
      this.streetName = streetName || '';
      this.postalCode = postalCode || '';
      this.city = city || '';
      this.province = province || '';
      this.country = country || '';
    }
  }