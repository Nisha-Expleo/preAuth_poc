//append_imports_start

import { PrimaryColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('users')
export class users {
  @PrimaryColumn({ name: 'user_id' })
  user_id: string;
  @Column({ name: 'email', nullable: false, type: 'text', primary: false })
  email: string;
  @Column({ name: 'full_name', nullable: false, type: 'text', primary: false })
  full_name: string;
  @Column({ name: 'created_at', nullable: false, type: 'text', primary: false })
  created_at: string;
  @Column({ name: 'role', nullable: false, type: 'text', primary: false })
  role: string;
}
