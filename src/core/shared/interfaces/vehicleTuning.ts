import IVehicleMod from './vehicleMod';

/**
 * Tuning to apply to an owned vehicle.
 *
 * @export
 * @interface IVehicleTuning
 */
export interface IVehicleTuning {
    /**
     * Cannot exceed modkit count
     *
     * @type {number}
     * @memberof IVehicleTuning
     */
    modkit: number;

    /**
     * Mods to apply to this vehicle
     *
     * @type {Array<IVehicleMod>}
     * @memberof IVehicleTuning
     */
    mods: Array<IVehicleMod>;

    /**
     * Handling data to apply to this vehicle
     *
     * @type {Partial<IVehicleHandling>}
     * @memberof IVehicleTuning
     */
    // handling: Partial<IVehicleHandling>;
}

export default IVehicleTuning;
