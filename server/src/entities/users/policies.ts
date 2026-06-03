//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('policies')
export class policies {
  @PrimaryGeneratedColumn({ name: 'policy_no' })
  policy_no: number;
  @Column({
    name: 'holder_name',
    nullable: false,
    type: 'text',
    primary: false,
  })
  holder_name: string;
  @Column({ name: 'plan_name', nullable: false, type: 'text', primary: false })
  plan_name: string;
  @Column({
    name: 'sum_insured',
    nullable: false,
    type: 'bigint',
    primary: false,
  })
  sum_insured: number;
  @Column({ name: 'status', nullable: false, type: 'text', primary: false })
  status: string;
}
