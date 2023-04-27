import { Euler, Vector3 } from 'three';

export interface IModel {
	position: Vector3;
	rotation?: Euler;
	scale?: [x: number, y: number, z: number];
}
