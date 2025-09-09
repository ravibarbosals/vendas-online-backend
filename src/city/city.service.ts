import { Inject, Injectable } from '@nestjs/common';
import { CityEntity } from './entities/city.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';


@Injectable()
export class CityService {
    constructor(
        @InjectRepository(CityEntity)
        private readonly cityRepositor: Repository<CityEntity>,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
      ) {}

    async getAllCitiesByStateId(stateId: number): Promise<CityEntity[]> {
       const citiesCache = await this.cacheManager.get<CityEntity[]>(
        `state_${stateId}`,
        );

        if (citiesCache){
         return citiesCache;
        }

        const cities = await this.cityRepositor.find({
            where: {
                stateId,
            },
        });

        await this.cacheManager.set<CityEntity[]>(
            `state_${stateId}`, cities);
        
        return cities;

    }
}
