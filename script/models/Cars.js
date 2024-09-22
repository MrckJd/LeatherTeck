// MakerBy Year
const MakeByYear = {
    '2025' : ["CHEVROLET","FORD","HONDA","HYUNDAI","KIA","NISSAN","SUBARU","TOYOTA"],
    '2024' : ["BUICK","CHEVROLET","CHRYSLER","DODGE","FORD","GMC","HONDA","HYUNDAI",
              "INEOS","JEEP","KIA","MAZDA","MERCEDES","MITSUBISHI","NISSAN","SUBARU",
              "POLARIS","POLESTER","RAM","TESLA","TOYOTA","VOLKSWAGEN"],
    '2023' : ["BUICK","CADILLAC","CHEVROLET","CHRYSLER","DODGE","FIAT","FORD","GMC",
              "HONDA","HYUNDAI","JEEP","KIA","LANDROVER","MAZDA","MERCEDES","MITSUBISHI"
              ,"NISSAN","POLARIS","POLESTER","RAM","SUBARU","TESLA","TOYOTA","VOLKSWAGEN","VOLVO"],
    '2022' : ["ACURA","BUICK","CADILLAC","CHEVROLET","CHRYSLER","DODGE","FIAT","FORD","GMC",
              "HONDA","HYUNDAI","JEEP","KIA","LANDROVER","MAZDA","MERCEDES","MINI COOPER","MITSUBISHI"
              ,"NISSAN","POLARIS","POLESTER","RAM","SUBARU","TESLA","TOYOTA","VOLKSWAGEN","VOLVO"],
    '2021' : ["BUICK","CADILLAC","CHEVROLET","CHRYSLER","DODGE","FIAT","FORD","GMC",
              "HONDA","HYUNDAI","JEEP","KIA","LANDROVER","MAZDA","MERCEDES","MINI COOPER","MITSUBISHI"
              ,"NISSAN","POLARIS","RAM","SUBARU","TESLA","TOYOTA","VOLKSWAGEN","VOLVO"],
    '2020' : ["BUICK","CADILLAC","CHEVROLET","CHRYSLER","DODGE","FIAT","FORD","GMC",
              "HONDA","HYUNDAI","JEEP","KIA","LANDROVER","MAZDA","MERCEDES","MINI COOPER","MITSUBISHI"
              ,"NISSAN","POLARIS","RAM","SUBARU","TESLA","TOYOTA","VOLKSWAGEN","VOLVO"],
    '2019' : ["BUICK","CADILLAC","CHEVROLET","CHRYSLER","DODGE","FIAT","FORD","GMC",
              "HONDA","HYUNDAI","INIFINITI","JEEP","KIA","LANDROVER","MAZDA","MERCEDES","MINI COOPER","MITSUBISHI"
              ,"NISSAN","RAM","SUBARU","TESLA","TOYOTA","VOLKSWAGEN","VOLVO"],
    '2018' : ["BUICK","CADILLAC","CHEVROLET","CHRYSLER","DODGE","FIAT","FORD","GMC",
              "HONDA","HYUNDAI","INIFINITI","JEEP","KIA","LANDROVER","MAZDA","MERCEDES","MINI COOPER","MITSUBISHI"
              ,"NISSAN","RAM","SUBARU","TESLA","TOYOTA","VOLKSWAGEN","VOLVO"],
    '2017' : ["BUICK","CADILLAC","CHEVROLET","CHRYSLER","DODGE","FIAT","FORD","GMC",
              "HONDA","HYUNDAI","INIFINITI","JEEP","KIA","LANDROVER","MAZDA","MERCEDES","MINI COOPER","MITSUBISHI"
              ,"NISSAN","RAM","SUBARU","TESLA","TOYOTA","VOLKSWAGEN","VOLVO"],
    '2016' : ["BUICK","CADILLAC","CHEVROLET","CHRYSLER","DODGE","FIAT","FORD","GMC",
              "HONDA","HYUNDAI","JEEP","KIA","MAZDA","MERCEDES","MINI COOPER","MITSUBISHI"
              ,"NISSAN","RAM","SCION","SUBARU","TOYOTA","VOLKSWAGEN"],
    '2015' : ["BUICK","CADILLAC","CHEVROLET","CHRYSLER","DODGE","FIAT","FORD","GMC",
              "HONDA","HYUNDAI","JEEP","KIA","LEXUS","MAZDA","MERCEDES","MINI COOPER","MITSUBISHI"
              ,"NISSAN","RAM","SCION","SMART","SUBARU","TOYOTA","VOLKSWAGEN"],
    '2014' : ["BUICK","CADILLAC","CHEVROLET","CHRYSLER","DODGE","FIAT","FORD","GMC",
              "HONDA","HYUNDAI","JEEP","KIA","LEXUS","MAZDA","MERCEDES","MINI COOPER","MITSUBISHI"
              ,"NISSAN","RAM","SCION","SMART","SUBARU","TOYOTA","VOLKSWAGEN"],
    '2013' : ["BUICK","CADILLAC","CHEVROLET","CHRYSLER","DODGE","FIAT","FORD","GMC",
              "HONDA","HYUNDAI","JEEP","KIA","LEXUS","MAZDA","MERCEDES","MINI COOPER","MITSUBISHI"
              ,"NISSAN","RAM","SCION","SMART","SUBARU","SUZUKI","TOYOTA","VOLKSWAGEN"],
    '2012' : ["BUICK","CADILLAC","CHEVROLET","CHRYSLER","DODGE","FIAT","FORD","GMC",
              "HONDA","HYUNDAI","JEEP","KIA","LEXUS","MAZDA","MERCEDES","MINI COOPER","MITSUBISHI"
              ,"NISSAN","RAM","SCION","SMART","SUBARU","SUZUKI","TOYOTA","VOLKSWAGEN"],
    '2011' : ["BUICK","CADILLAC","CHEVROLET","CHRYSLER","DODGE","FORD","GMC",
              "HONDA","HYUNDAI","JEEP","KIA","LEXUS","MAZDA","MERCEDES","MERCURY","MINI COOPER","MITSUBISHI"
              ,"NISSAN","RAM","SCION","SMART","SUBARU","SUZUKI","TOYOTA","VOLKSWAGEN"],
    '2010' : ["AM GENERAL","BMW","BUICK","CADILLAC","CHEVROLET","CHRYSLER","DODGE","FORD","GMC",
              "HONDA","HYUNDAI","JEEP","KIA","LEXUS","MAZDA","MERCEDES","MERCURY","MINI COOPER","MITSUBISHI"
              ,"NISSAN","PONTIAC","RAM","SATURN","SCION","SMART","SUBARU","SUZUKI","TOYOTA","VOLKSWAGEN"],
    '2009' : ["AM GENERAL","BMW","BUICK","CADILLAC","CHEVROLET","CHRYSLER","DODGE","FORD","GMC",
              "HONDA","HYUNDAI","JEEP","KIA","LEXUS","MAZDA","MERCEDES","MERCURY","MINI COOPER","MITSUBISHI"
              ,"NISSAN","PONTIAC","RAM","SATURN","SCION","SMART","SUBARU","SUZUKI","TOYOTA","VOLKSWAGEN"],
    '2008' : ["ACURA","AM GENERAL","BMW","BUICK","CADILLAC","CHEVROLET","CHRYSLER","DODGE","FORD","GMC",
              "HONDA","HYUNDAI","ISUZU","JEEP","KIA","LEXUS","LINCOLN","MAZDA","MERCEDES","MERCURY","MINI COOPER","MITSUBISHI"
              ,"NISSAN","PONTIAC","RAM","SATURN","SCION","SMART","SUBARU","SUZUKI","TOYOTA"],
    '2007' : ["ACURA","AM GENERAL","BUICK","CADILLAC","CHEVROLET","CHRYSLER","DODGE","FORD","GMC",
              "HONDA","HYUNDAI","INFINITI","ISUZU","JEEP","KIA","LEXUS","LINCOLN","MAZDA","MERCURY","MINI COOPER","MITSUBISHI"
              ,"NISSAN","PONTIAC","RAM","SATURN","SCION","SUBARU","SUZUKI","TOYOTA"],
    '2006' : ["ACURA","AM GENERAL","BUICK","CADILLAC","CHEVROLET","CHRYSLER","DODGE","FORD","GMC",
              "HONDA","HYUNDAI","INFINITI","ISUZU","JEEP","KIA","LEXUS","LINCOLN","MAZDA","MERCURY","MINI COOPER","MITSUBISHI"
              ,"NISSAN","PONTIAC","RAM","SAAB","SATURN","SCION","SUBARU","SUZUKI","TOYOTA"],
    '2005' : ["ACURA","AM GENERAL","BUICK","CADILLAC","CHEVROLET","CHRYSLER","DODGE","FORD","GMC",
              "HONDA","HYUNDAI","INFINITI","ISUZU","JEEP","KIA","LEXUS","LINCOLN","MAZDA","MERCURY","MINI COOPER","MITSUBISHI"
              ,"NISSAN","PLYMOUTH","PONTIAC","SAAB","SATURN","SCION","SUBARU","SUZUKI","TOYOTA","VOLKSWAGEN"],
    '2004' : ["ACURA","AM GENERAL","BUICK","CADILLAC","CHEVROLET","CHRYSLER","DODGE","FORD","GMC",
              "HONDA","HYUNDAI","INFINITI","ISUZU","JEEP","KIA","LEXUS","LINCOLN","MAZDA","MERCEDES","MERCURY","MINI COOPER","MITSUBISHI"
              ,"NISSAN","OLDSMOBILE","PLYMOUTH","PONTIAC","SATURN","SCION","SUBARU","SUZUKI","TOYOTA","VOLKSWAGEN"],
    '2003' : ["ACURA","AM GENERAL","BUICK","CADILLAC","CHEVROLET","CHRYSLER","DODGE","FORD","GMC",
              "HONDA","HYUNDAI","INFINITI","ISUZU","JEEP","KIA","LEXUS","LINCOLN","MAZDA","MERCEDES","MERCURY","MINI COOPER","MITSUBISHI"
              ,"NISSAN","OLDSMOBILE","PLYMOUTH","PONTIAC","SATURN","SUBARU","SUZUKI","TOYOTA","VOLKSWAGEN"],
    '2002' : ["ACURA","AM GENERAL","BMW","BUICK","CADILLAC","CHEVROLET","CHRYSLER","DODGE","FORD","GEO","GMC",
              "HONDA","HYUNDAI","ISUZU","JEEP","KIA","LEXUS","MAZDA","MERCEDES","MERCURY","MINI COOPER","MITSUBISHI"
              ,"NISSAN","OLDSMOBILE","PLYMOUTH","PONTIAC","SATURN","SUBARU","TOYOTA","VOLKSWAGEN"],
    '2001' : ["ACURA","AM GENERAL","AUDI","BMW","BUICK","CADILLAC","CHEVROLET","CHRYSLER","DODGE","FORD","GEO","GMC",
              "HONDA","HYUNDAI","INFINITI","ISUZU","JEEP","KIA","LANDROVER","LEXUS","MAZDA","MERCEDES","MERCURY","MITSUBISHI"
              ,"NISSAN","OLDSMOBILE","PLYMOUTH","PONTIAC","RAM","SATURN","SUBARU","TOYOTA"],
    '2000' : ["ACURA","AM GENERAL","AUDI","BMW","BUICK","CADILLAC","CHEVROLET","CHRYSLER","DODGE","FORD","GEO","GMC",
              "HONDA","HYUNDAI","INFINITI","ISUZU","JEEP","KIA","LANDROVER","LEXUS","LINCOLN","MAZDA","MERCEDES","MERCURY","MITSUBISHI"
              ,"NISSAN","OLDSMOBILE","PLYMOUTH","PONTIAC","PORSCHE","RAM","SATURN","SUBARU","SUZUKI","TOYOTA"],
    '1999' : ["ACURA","AM GENERAL","AUDI","BMW","BUICK","CADILLAC","CHEVROLET","CHRYSLER","DODGE","FORD","GEO","GMC",
              "HONDA","HYUNDAI","INFINITI","ISUZU","JEEP","KIA","LANDROVER","LEXUS","LINCOLN","MAZDA","MERCEDES","MERCURY","MITSUBISHI"
              ,"NISSAN","OLDSMOBILE","PLYMOUTH","PONTIAC","PORSCHE","RAM","SATURN","SUBARU","SUZUKI","TOYOTA"],
    '1998' : ["ACURA","AM GENERAL","AUDI","BMW","BUICK","CADILLAC","CHEVROLET","CHRYSLER","DODGE","FORD","GEO","GMC",
              "HONDA","HYUNDAI","INFINITI","ISUZU","JEEP","KIA","LANDROVER","LEXUS","LINCOLN","MAZDA","MERCEDES","MERCURY","MITSUBISHI"
              ,"NISSAN","OLDSMOBILE","PLYMOUTH","PONTIAC","SATURN","SUBARU","SUZUKI","TOYOTA"],
    '1997' : ["ACURA","AM GENERAL","AUDI","BMW","BUICK","CADILLAC","CHEVROLET","CHRYSLER","DODGE","FORD","GMC",
              "HONDA","HYUNDAI","INFINITI","JEEP","KIA","LEXUS","LINCOLN","MAZDA","MERCURY","MITSUBISHI"
              ,"NISSAN","OLDSMOBILE","PLYMOUTH","PONTIAC","SATURN","SUBARU","SUZUKI","TOYOTA"],
    '1996' : ["ACURA","AM GENERAL","BMW","CHEVROLET","CHRYSLER","DODGE","FORD","GMC",
              "HONDA","INFINITI","JEEP","KIA","LEXUS","LINCOLN","MAZDA","MERCURY","MITSUBISHI","NISSAN","PONTIAC","SATURN","SUBARU","SUZUKI","TOYOTA"],
    '1995' : ["ACURA","BMW","CHEVROLET","CHRYSLER","DODGE","FORD","GMC",
              "HONDA","INFINITI","JEEP","LEXUS","LINCOLN","MAZDA","MERCEDES","MERCURY","MITSUBISHI","NISSAN","PONTIAC","SATURN","SUBARU","TOYOTA"],
    '1994' : ["ACURA","BMW","CHEVROLET","CHRYSLER","DODGE","FORD","GMC","HONDA","JEEP","LEXUS","MAZDA","MERCURY","MITSUBISHI","NISSAN","PONTIAC","SUBARU","TOYOTA"],
    '1993' : ["ACURA","CHEVROLET","DODGE","FORD","HONDA","JEEP","LEXUS","MAZDA","MERCURY","MITSUBISHI","NISSAN","PONTIAC","TOYOTA"],
    '1992' : ["ACURA","CHEVROLET","DODGE","FORD","HONDA","JEEP","LEXUS","MAZDA","MERCURY","MITSUBISHI","NISSAN","TOYOTA"],
    '1991' : ["ACURA","BMW","CHEVROLET","FORD","HONDA","JEEP","LEXUS","MAZDA","MERCURY","NISSAN","TOYOTA"],
    '1990' : ["ACURA","BMW","CHEVROLET","FORD","HONDA","JEEP","LEXUS","MAZDA","NISSAN","TOYOTA"],
    '1989' : ["ACURA","BMW","CHEVROLET","FORD","JEEP","LEXUS","MAZDA","NISSAN","TOYOTA"],
    '1988' : ["ACURA","BMW","CHEVROLET","FORD","JEEP","NISSAN"],
    '1987' : ["BMW","CHEVROLET","FORD","JEEP","NISSAN"],
    '1986' : ["BMW","CHEVROLET","FORD","JEEP","NISSAN"],
    '1985' : ["BMW","CHEVROLET","FORD","NISSAN"],
    '1984' : ["CHEVROLET"],
};

// Maker Model By Year 2025

const MakeModel={
    '2025': {
        'CHEVROLET' : ["EQUINOX","MALIBU","TRAILBLAZER","TRAX"],
        'FORD': ["EXPLORER"],
        'HONDA' : ["CIVIC","CRV", "HRV", "PILOT"],
        'HYUNDAI' : ["TUCSON"],
        'KIA' : ["K5","SELTOS","SOUL","SPORTAGE"],
        'NISSAN' : ["LEAF"],
        'SUBARU' : ["FORESTER","LEGACY","OUTBREAK"],
        'TOYOTA' : ["CAMRY","CROWN"],
    },
    '2024': {
        'BUICK' : ["ENCORE GX", "ENVISTA"],
        'CHEVROLET' : ["BLAZER","BLAZER EV","CAMARO","COLORADO","EQUINOX","MALIBU","SILVERADO","SUBURBAN","TAHOE","TRAILBLAZER","TRAVERSE","TRAVERSE LIMITED","TRAX"],
        'CHRYSLER' : ["PACIFICA","VOYAGER"],
        'DODGE' : ["1500 DS CLASSIC", "CHARGER", "DURANGO" , "HORNET"],
        'FORD': ["BRONCO","BRONCO SPORT","EDGE","ESCAPE","EXPEDITION","EXPLORER","F-150","F-250/350/450/550","MAVERICK","MUSTANG","MUSTANG MACH-E","RANGER"],
        'GMC': ["CANYON","SIERA","TERRAIN" ,"YUKON"],
        'HONDA' : ["ACCORD","CIVIC","CRV", "HRV","ODYSSEY","PILOT","PROLOGUE","RIDGELINE"],
        'HYUNDAI': ["ELANTRA", "IONIQ 5", "IONIQ 6", "KONA", "KONA EV", "PALISADE", "SANTA CRUZ", "SANTA FE", "SONATA", "TUCSON", "VENUE"],
        'INEOS' : ["STATION WAGON"],
        'JEEP': ["COMPASS", "GLADIATOR", "GRAND CHEROKEE L", "GRAND CHEROKEE WL", "WRANGLER", "WRANGLER 4XE"],
        'KIA': ["CARNIVAL", "EV6", "FORTE", "K5", "NIRO", "SELTOS", "SORENTO", "SOUL", "SPORTAGE", "TELLURIDE"],
        'MAZDA': ["3","CX-50","CX30","CX5"],
        'MERCEDES': ["SPRINTER", "SPRINTER VAN"],
        'MITSUBISHI': ["OUTLANDER", "OUTLANDER SPORT"],
        'NISSAN' : ["370Z","400 Z","ALTIMA","FRONTIER","KICKS","LEAF","MURANO","PATHFINDER","ROGUE"],
        'POLARIS' : ["RAZOR"],
        'POLESTER' : ["2"],
        'RAM' : ["1500 DS CLASSIC", "1500 DT","2500", "3500", "PROMASTER"],
        'SUBARU' : ["ASCENT","CROSTEAK","FORESTER","IMPREZA","LEGACY","OUTBREAK"],
        'TESLA' : ["MODEL 3", "TESLA"],
        'TOYOTA' : ["4RUNNER","BZ4X","CAMRY","COROLLA","COROLLA CROSS","COROLLA GR","CROWN","GRAND HIGHLANDER", "HIGHLANDER","LANDCRUISER","PRIUS","PRIUS PRIME","RAV4","RAV4 PRIME","SEQUOA","SIENNA","TACOMA","TUNDRA","VENZA"],
        'VOLKSWAGEN' : ["JETTA","TAOS","TIGUAN"]
    }
};