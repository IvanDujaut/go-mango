/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { take, tap, map } from 'rxjs';
import { Benefit } from 'src/app/models/benefit';
import { BenefitCategory } from 'src/app/models/benefitCategory';
import { Coupon } from 'src/app/models/coupon';
@Injectable({ providedIn: 'root' })
export class CuponService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private apollo: Apollo) {}

  getCupons() {
    const QUERY = gql`
      query getClientCouponsByCategories {
        clients(filters: { clientId: { eq: "bitsports" } }) {
          data {
            attributes {
              coupon_categories {
                data {
                  attributes {
                    name
                    coupons {
                      data {
                        attributes {
                          title
                          description
                          code
                          partner {
                            data {
                              attributes {
                                name
                              }
                            }
                          }
                          logo {
                            data {
                              attributes {
                                url
                              }
                            }
                          }
                          banner {
                            data {
                              attributes {
                                url
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;
    return this.apollo.watchQuery({ query: QUERY }).valueChanges.pipe(
      take(1),
      map((response: any): Coupon[] => {
        const arrayCoupon = [];
        let categories =
          response.data.clients.data[0].attributes.coupon_categories;
        categories = categories.data.map((res: any): Coupon => {
          return res.attributes;
        });

        for (const category of categories) {
          const coupons = category.coupons.data.map((res: any): Coupon => {
            return {
              title: res.attributes.title,
              description: res.attributes.description,
              logo:
                'http://gomango.banana-software.com' +
                res.attributes.logo.data.attributes.url,
              banner:
                'http://gomango.banana-software.com' +
                res.attributes.banner.data.attributes.url,
              category: category.name,
              partner: res.attributes.partner.data.attributes.name,
              code: res.attributes.code,
            };
          });
          arrayCoupon.push(...coupons);
        }
        return arrayCoupon;
      })
    );
  }

  getClientData() {
    const QUERY = gql`
      query getClientData {
        clients(filters: { clientId: { eq: "pepsico" } }) {
          data {
            attributes {
              name
              clientId
              subdomain
              location {
                data {
                  attributes {
                    name
                  }
                }
              }
              createdAt
            }
          }
        }
      }
    `;
    return this.apollo.watchQuery({ query: QUERY }).valueChanges.pipe(
      take(1),
      tap((res) => {
        console.log(res);
      })
    );
  }

  getClientCouponsByCategory(category: string) {
    console.log(category);
    const QUERY = gql`
    query getCouponsByClientAndCategory {
      clients(filters: {
        clientId: {eq: "bitsports"}
      }){ 
        data{
          attributes {     
            coupon_categories (filters: {
              name: {eq: "${category}"}
            }) {
              data {
                attributes {
                  name 
                  coupons {
                    data {
                      attributes {
                        title
                        description
                        code
                        partner {
                          data {
                            attributes {
                              name
                            }
                          }
                        }
                        logo {
                          data {
                            attributes {
                              url
                            }
                          }
                        }
                        banner {
                          data {
                            attributes {
                              url
                            }
                          }
                        }
    
                      }
                    }  
                  }
                }
              }
            }
          }
        }
      }
    }
    `;
    return this.apollo.watchQuery({ query: QUERY }).valueChanges.pipe(
      take(1),
      map((response: any): Coupon[] => {
        const arrayCoupon: any[] = [];
        if (
          response.data.clients.data[0].attributes.coupon_categories.data
            .length === 0
        ) {
          return arrayCoupon;
        }
        const coupons =
          response.data.clients.data[0].attributes.coupon_categories.data[0].attributes.coupons.data.map(
            (res: any): Coupon => {
              return {
                title: res.attributes.title,
                description: res.attributes.description,
                logo:
                  'http://gomango.banana-software.com' +
                  res.attributes.logo.data.attributes.url,
                banner:
                  'http://gomango.banana-software.com' +
                  res.attributes.banner.data.attributes.url,
                category: category,
                partner: res.attributes.partner.data.attributes.name,
                code: res.attributes.code,
              };
            }
          );
        arrayCoupon.push(...coupons);

        return arrayCoupon;
      })
    );
  }

  getClientBenefits() {
    const QUERY = gql`
      query getClientBenefisByCategories {
        clients(filters: { clientId: { eq: "bitsports" } }) {
          data {
            attributes {
              benefit_categories {
                data {
                  attributes {
                    name
                    benefits {
                      data {
                        attributes {
                          title
                          description
                          image {
                            data {
                              attributes {
                                url
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;
    return this.apollo.watchQuery({ query: QUERY }).valueChanges.pipe(
      take(1),
      map((response: any): Benefit[] => {
        const arrayBenefits = [];
        let categories =
          response.data.clients.data[0].attributes.benefit_categories;
        categories = categories.data.map((res: any) => {
          return res.attributes;
        });
        for (const category of categories) {
          const benefits = category.benefits.data.map((res: any): Benefit => {
            return {
              title: res.attributes.title,
              description: res.attributes.description,
              image:
                'http://gomango.banana-software.com' +
                res.attributes.image.data.attributes.url,
              category: category.name,
            };
          });
          arrayBenefits.push(...benefits);
        }
        return arrayBenefits;
      })
    );
  }

  getClientBenefisByCategories(category: string) {
    const QUERY = gql`
    query getBenefitsByClientAndCategory {
      clients(filters: { clientId: { eq: "bitsports" } }) {
        data {
          attributes {
            benefit_categories(filters: { name: { eq: "${category}" } }) {
              data {
                attributes {
                  name
                  benefits {
                    data {
                      attributes {
                        title
                        description
                        image {
                          data {
                            attributes {
                              url
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    `;
    return this.apollo.watchQuery({ query: QUERY }).valueChanges.pipe(
      take(1),
      map((response: any): Benefit[] => {
        const arrayBenefits: any[] = [];
        if (
          response.data.clients.data[0].attributes.benefit_categories.data
            .length === 0
        ) {
          return arrayBenefits;
        }
        const benefits =
          response.data.clients.data[0].attributes.benefit_categories.data[0].attributes.benefits.data.map(
            (res: any): Benefit => {
              return {
                title: res.attributes.title,
                description: res.attributes.description,
                image:
                  'http://gomango.banana-software.com' +
                  res.attributes.image.data.attributes.url,
                category: category,
              };
            }
          );
        arrayBenefits.push(...benefits);

        return arrayBenefits;
      })
    );
  }

  getBenefitCategories() {
    const QUERY = gql`
      query getBenefitsByClientAndCategory {
        clients(filters: { clientId: { eq: "bitsports" } }) {
          data {
            attributes {
              benefit_categories {
                data {
                  attributes {
                    name
                    benefits {
                      data {
                        attributes {
                          title
                          description
                          image {
                            data {
                              attributes {
                                url
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;
    return this.apollo.watchQuery({ query: QUERY }).valueChanges.pipe(
      take(1),
      map((response: any): BenefitCategory[] => {
        if (
          response.data.clients.data[0].attributes.benefit_categories.data
            .length === 0
        ) {
          return [];
        }
        return response.data.clients.data[0].attributes.benefit_categories.data.map(
          (strapiCategory: any) => {
            return {
              name: strapiCategory.attributes.name,
              benefits: strapiCategory.attributes.benefits.data.map(
                (res: any): Benefit => {
                  return {
                    title: res.attributes.title,
                    description: res.attributes.description,
                    image:
                      'http://gomango.banana-software.com' +
                      res.attributes.image.data.attributes.url,
                    category: strapiCategory.attributes.name,
                  };
                }
              ),
            };
          }
        );
      })
    );
  }

  validateDNI(dni: number) {
    const QUERY = gql`
      query getUserByDNI {
        usersPermissionsUsers(filters: { DNI: { eq: ${dni} } }) {
          data {
            attributes {
              username
            }
          }
        }
      }
    `;
    return this.apollo.watchQuery({ query: QUERY }).valueChanges.pipe(
      take(1),
      map((response: any) => {
        return response.data.usersPermissionsUsers.data;
      })
    );
  }
}
