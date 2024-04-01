import { getRepository, getConnection } from 'typeorm';
import Film from '../typeorm/entities/Film';
import IProducersWithMinAndMaxInterval from '../models/IProducersWithMinAndMaxInterval';
import IFilmInterval from '../models/IFilmInterval';

class FindProducersWithMinAndMaxIntervalService {
    public async execute(intervals: IProducersWithMinAndMaxInterval): Promise<{ min: IFilmInterval[], max: IFilmInterval[] }> {
        const minIntervals = intervals.min;
        const maxIntervals = intervals.max;

        const minResults: IFilmInterval[] = await this.getMinIntervals(minIntervals);
        const maxResults: IFilmInterval[] = await this.getMaxIntervals(maxIntervals);

        return { min: minResults, max: maxResults };
    }

    private async getMinIntervals(minIntervals: IFilmInterval[]): Promise<IFilmInterval[]> {
        const results: IFilmInterval[] = [];
        for (const interval of minIntervals) {
            const minIntervalFilm = await getConnection()
                .createQueryBuilder()
                .select("MAX(f.Year) - MIN(f.Year)", "interval")
                .addSelect("MIN(f.Year)", "previousWin")
                .addSelect("MAX(f.Year)", "followingWin")
                .from(Film, "f")
                .where("f.producers = :producer", { producer: interval.producer })
                .andWhere("f.winner = :winner", { winner: 'yes' })
                .getRawOne();

            if (minIntervalFilm) {
                results.push({
                    producer: interval.producer,
                    interval: parseInt(minIntervalFilm.interval),
                    previousWin: parseInt(minIntervalFilm.previousWin),
                    followingWin: parseInt(minIntervalFilm.followingWin)
                });
            }
        }
        return results;
    }

    private async getMaxIntervals(maxIntervals: IFilmInterval[]): Promise<IFilmInterval[]> {
        const results: IFilmInterval[] = [];
        for (const interval of maxIntervals) {
            const maxIntervalFilm = await getConnection()
                .createQueryBuilder()
                .select("MAX(f.Year) - MIN(f.Year)", "interval")
                .addSelect("MIN(f.Year)", "previousWin")
                .addSelect("MAX(f.Year)", "followingWin")
                .from(Film, "f")
                .where("f.producers = :producer", { producer: interval.producer })
                .andWhere("f.winner = :winner", { winner: 'yes' })
                .getRawOne();

            if (maxIntervalFilm && parseInt(maxIntervalFilm.interval) > 0) {
                results.push({
                    producer: interval.producer,
                    interval: parseInt(maxIntervalFilm.interval),
                    previousWin: parseInt(maxIntervalFilm.previousWin),
                    followingWin: parseInt(maxIntervalFilm.followingWin)
                });
            }
        }
        return results;
    }
}

export default FindProducersWithMinAndMaxIntervalService;
